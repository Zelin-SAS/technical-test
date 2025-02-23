import dotenv from 'dotenv';
import axios from 'axios';
import { expect } from 'chai';

dotenv.config();

const API_URL = `http://localhost:${process.env.PORT || 3001}`;
let lastAddedBookId = 0;

// Test if the server is running
describe('Server', function() {
    it('Server should be running', async function() {
        const res = await axios.get(`${API_URL}/`);
        expect(res.status).to.equal(200);
    });
});

// Test the GET route
describe('GET /books', function() {
    it('It should return all books', async function() {
        let res = await axios.get(`${API_URL}/books`);
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array');
        if (res.data.length === 0) {
            // Load seed data if no books are found
            res = await axios.put(`${API_URL}/books/loadSeeds`);
            expect(res.status).to.equal(200);
            res = await axios.get(`${API_URL}/books`);
        }
        expect(res.data.length).to.be.above(0);
    });
});

// Test the POST route
describe('POST /books', function() {
    it('It should add a new book', async function() {
        const book = {
            title: 'Test Book',
            author: 'Test Author',
            note: 0,
            description: 'Test Dscription',
            img: 'https://via.placeholder.com/150'
        };
        const res = await axios.post(`${API_URL}/books`, book);
        expect(res.status).to.equal(200);
        lastAddedBookId = res.data.id;
        expect(res.data).to.be.an('object');
        expect(res.data).to.have.property('title').eq('Test Book');
        expect(res.data).to.have.property('author').eq('Test Author');
        expect(res.data).to.have.property('note').eq(0);
        expect(res.data).to.have.property('description').eq('Test Dscription');
        expect(res.data).to.have.property('img').eq('');
    });
});

// Test the PATCH route
describe('PATCH /book/:id', function() {
    it('It should update a book', async function() {
        expect(lastAddedBookId).to.be.above(0);
        const book = {
            title: 'Updated Test Book',
            author: 'Updated Test Author',
            note: 3,
            description: 'Updated Test Description',
            img: 'https://via.placeholder.com/151'
        };
        const res = await axios.patch(`${API_URL}/book/${lastAddedBookId}`, book);
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('object');
        expect(res.data).to.have.property('affectedRows').eq(1);
    });
});

// Test the DELETE route
describe('DELETE /book/:id', function() {
    it('It should delete a book', async function() {
        expect(lastAddedBookId).to.be.above(0);
        const res = await axios.delete(`${API_URL}/book/${lastAddedBookId}`);
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('object');
        expect(res.data).to.have.property('affectedRows').eq(1);
    });
});
