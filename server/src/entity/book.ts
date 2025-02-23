import mysql from "mysql2";
import Database, { BookAttributes } from "../services/database";
import { isImageUrlValid } from "../services/imageValidator";
import bookSeeds from "../seeds/book";

export default class Book {
	private static database: Database;
	private static seeds: BookAttributes[];

	constructor(private attributes?: BookAttributes) {}

	static setDatabase(database: Database) {
		Book.database = database;
		Book.seeds = Book.seeds || bookSeeds;
	}

	private static isDatabaseSet(): void {
		if (!Book.database) {
			throw new Error("Database not set");
		}
	}

	static getAllBooks(req: any, res: any): void {
		Book.isDatabaseSet();
		Book.database.query(
			"SELECT * FROM books",
			[],
			async (err: Error | null, results?: mysql.RowDataPacket[]) => {
				if (err) {
					res.status(500).send(err);
				} else {
					const books = results ? results.map(
						(row: any) => new Book({
							id: row.id,
							title: row.title,
							author: row.author,
							note: row.note,
							description: row.description,
							last_modification: row.last_modification_date,
							img: row.img,
						}).attributes
					) : [];
					res.send(books);
				}
			},
		);
	}

	static getBookById(req: any, res: any): void {
		const id = req.params.id;
		Book.isDatabaseSet();
		Book.database.query(
			"SELECT * FROM books WHERE id = ?",
			[id],
			async (err: Error | null, results?: mysql.RowDataPacket[]) => {
				if (err) {
					res.status(500).send(err);
				} else {
					const book = results?.length
						? new Book({
								id: results[0].id,
								title: results[0].title,
								author: results[0].author,
								note: results[0].note,
								description: results[0].description,
								last_modification: results[0].last_modification_date,
								img: results[0].img,
							}).attributes
						: null;
					res.send(book);
				}
			},
		);
	}

	static async addBook(req: any, res: any): Promise<void> {
		const { title, author, description, note, img } = req.body;
		const validImage = await isImageUrlValid(img);
		Book.isDatabaseSet();
		Book.database.query(
			"INSERT INTO books (title, author, note, description, img) VALUES (?, ?, ?, ?, ?)",
			[title, author, note, description, validImage ? img : ""],
			(err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					const book = new Book({
						id: result?.insertId || 0,
						title,
						author,
						note,
						description,
						last_modification: new Date(),
						img: validImage ? img : "",
					}).attributes;
					res.send(book);
				}
			},
		);
	}

	static async updateBook(req: any, res: any): Promise<void> {
		const id = req.params.id;
		const { title, author, note, description, img } = req.body;
		const validImage = await isImageUrlValid(img) ? img : "";
		Book.isDatabaseSet();
		Book.database.query(
			"UPDATE books SET title = ?, author = ?, note = ?, description= ?, img = ? WHERE id = ?",
			[title, author, note, description, validImage, id],
			(err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			},
		);
	}

	static deleteBook(req: any, res: any): void {
		const id = req.params.id;
		Book.isDatabaseSet();
		Book.database.query(
			"DELETE FROM books WHERE id = ?",
			[id],
			(err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			},
		);
	}

	static loadSeeds(req: any, res: any): void {
		Book.isDatabaseSet();
		Book.database.query(
			"INSERT INTO books (id, title, author, note, description, last_modification_date, img) VALUES ?",
			[Book.seeds.map((seed) => Object.values(seed))],
			(err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			},
			true
		);
	}
}
