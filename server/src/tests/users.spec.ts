import dotenv from 'dotenv';
import axios from 'axios';
import { expect } from 'chai';

dotenv.config();

const API_URL = `http://localhost:${process.env.PORT || 3001}`;
let lastAddedUserId = 0;

// Test if the server is running
describe('Server', function() {
    it('Server should be running', async function() {
        const res = await axios.get(`${API_URL}/`);
        expect(res.status).to.equal(200);
    });
});

// Test the GET route
describe('GET /users', function() {
    it('It should return all users', async function() {
        let res = await axios.get(`${API_URL}/users`);
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array');
    });
});

// Test the POST route
describe('POST /users', function() {
    it('It should add a new user', async function() {
        const user = {
            username: 'Test user name',
            userlastname: 'Test user Lastname',
            email: 'testuser.example.com',
            password: 'testpassword'
        };
        const res = await axios.post(`${API_URL}/users`, user);
        expect(res.status).to.equal(200);
        lastAddedUserId = res.data.id;
        expect(res.data).to.be.an('object');
        expect(res.data).to.have.property('username').eq('Test user name');
        expect(res.data).to.have.property('userlastname').eq('Test user Lastname');
        expect(res.data).to.have.property('email').eq('testuser.example.com');
        expect(res.data).to.have.property('password').eq('testpassword');


        if(lastAddedUserId !== 0) {
            // Test the POST for login route
            describe('POST /login', function() {
                it('It should login a user', async function() {
                    const user = {
                        email: 'testuser.example.com',
                        password: 'testpassword'
                    };
                    const res = await axios.post(`${API_URL}/login`, user);
                    expect(res.status).to.equal(200);
                    expect(res.data).to.be.an('object');
                    expect(res.data).to.have.property('email').eq('testuser.example.com');
                });
            });

            // Test the PATCH route
            describe('PATCH /user/:id', function() {
                it('It should update a user', async function() {
                    expect(lastAddedUserId).to.be.above(0);
                    const user = {
                        username: 'Updated user name',
                        userlastname: 'Updated user lastname',
                        email: 'updateduser.example.com',
                        password: 'updatedpassword'
                    };
                    const res = await axios.patch(`${API_URL}/user/${lastAddedUserId}`, user);
                    expect(res.status).to.equal(200);
                    expect(res.data).to.be.an('object');
                    expect(res.data).to.have.property('affectedRows').eq(1);
                });
            });

            // Test the DELETE route
            describe('DELETE /user/:id', function() {
                it('It should delete a user', async function() {
                    expect(lastAddedUserId).to.be.above(0);
                    const res = await axios.delete(`${API_URL}/user/${lastAddedUserId}`);
                    expect(res.status).to.equal(200);
                    expect(res.data).to.be.an('object');
                    expect(res.data).to.have.property('affectedRows').eq(1);
                });
            });
        }
    });
});
