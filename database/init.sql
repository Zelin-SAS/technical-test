-- Create a database
CREATE DATABASE book_database;

-- Switch to the new database
USE book_database;

-- Create a table for books
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    note TEXT,
    last_modification_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert a new book
INSERT INTO books (title, author, note) 
VALUES ('Sample Book', 'Sample Author', 'This is a sample note.');

-- Get the list of books
SELECT * FROM books;

-- Update a book's properties
UPDATE books 
SET title = 'Updated Title', author = 'Updated Author', note = 'Updated Note' 
WHERE id = 1;

-- Delete a book from the list
DELETE FROM books WHERE id = 1;
