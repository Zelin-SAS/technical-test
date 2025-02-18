import mysql from 'mysql2';
import Database, { BookAttributes } from '../services/database';

class Book {

    private static database: Database;

    constructor(private attributes? : BookAttributes) {}

    static setDatabase(database: Database) {
        Book.database = database;
    }
    
    private static isDatabaseSet() : void {
        if (!Book.database) {
            throw new Error('Database not set');
        }
    }

    static getAllBooks(req: any, res: any) : void {
        Book.isDatabaseSet();
        Book.database.query('SELECT * FROM books', [], (err: Error | null, results?: mysql.RowDataPacket[]) => {
            if (err) {
                res.status(500).send(err);
            } else {
                const books = results?.map((row: any) => new Book({
                    id: row.id, 
                    title: row.title, 
                    author: row.author, 
                    note: row.note, 
                    lastModificationDate: row.last_modification_date
                }).attributes);
                res.send(books);
            }
        });
    }
    
    static getBookById(req: any, res: any) : void {
        const id = req.params.id;
        Book.isDatabaseSet();
        Book.database.query('SELECT * FROM books WHERE id = ?', [id], (err: Error | null, results?: mysql.RowDataPacket[]) => {
            if (err) {
                res.status(500).send(err);
            } else {
                const book = results?.length ? new Book({
                    id: results[0].id,
                    title: results[0].title,
                    author: results[0].author,
                    note: results[0].note,
                    lastModificationDate: results[0].last_modification_date
                }).attributes : null;
                res.send(book);
            }
        });
    }

    static addBook(req: any, res: any) : void {
        const { title, author, note } = req.body;
        Book.isDatabaseSet();
        Book.database.query('INSERT INTO books (title, author, note) VALUES (?, ?, ?)', [title, author, note], (err: Error | null, result?: mysql.ResultSetHeader) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send({ id: result?.insertId, title, author, note });
            }
        });
    }

    static updateBook(req: any, res: any) : void {
        const id = req.params.id;
        const { title, author, note } = req.body;
        Book.isDatabaseSet();
        Book.database.query('UPDATE books SET title = ?, author = ?, note = ? WHERE id = ?', [title, author, note, id], (err: Error | null, result?: mysql.ResultSetHeader) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
    }

    static deleteBook(req: any, res: any) : void {
        const id = req.params.id;
        Book.isDatabaseSet();
        Book.database.query('DELETE FROM books WHERE id = ?', [id], (err: Error | null, result?: mysql.ResultSetHeader) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
    }
}

export default Book;