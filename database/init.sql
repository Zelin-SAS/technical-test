-- Drop the database if it exists
DROP DATABASE IF EXISTS book_database;

-- Create a database
CREATE DATABASE IF NOT EXISTS book_database;

-- Switch to the new database
USE book_database;

-- Create a table for books
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    note TEXT,
    last_modification_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    img VARCHAR(255) DEFAULT ''
);