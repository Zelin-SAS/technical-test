import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Database from "./services/database";
import AppRouter from "./services/router";
import Book from "./entity/book";
import User from "./entity/user";
import cors from "cors";

dotenv.config();

const db = new Database({
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER,
	password: process.env.DB_ROOT_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
});

const entities = [Book, User];

entities.forEach((entity) => entity.setDatabase(db));

const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

app.use(express.json());
app.use(cors());

const router = new AppRouter(app);

const routes = [
	{
		method: "get",
		path: "/books",
		handler: (req: any, res: any) => Book.getAllBooks(req, res),
	},
	{
		method: "get",
		path: "/book/:id",
		handler: (req: any, res: any) => Book.getBookById(req, res),
	},
	{
		method: "post",
		path: "/books",
		handler: (req: any, res: any) => Book.addBook(req, res),
	},
	{
		method: "put",
		path: "/books/loadSeeds",
		handler: (req: any, res: any) => Book.loadSeeds(req, res),
	},
	{
		method: "delete",
		path: "/book/:id",
		handler: (req: any, res: any) => Book.deleteBook(req, res),
	},
	{
		method: "patch",
		path: "/book/:id",
		handler: (req: any, res: any) => Book.updateBook(req, res),
	},
	{
		method: "post",
		path: "/login",
		handler: (req: any, res: any) => User.login(req, res),
	},
	{
		method: "post",
		path: "/users",
		handler: (req: any, res: any) => User.addUser(req, res),
	},
	{
		method: "get",
		path: "/users",
		handler: (req: any, res: any) => User.getAllUsers(req, res),
	},
	{
		method: "put",
		path: "/users/loadSeeds",
		handler: (req: any, res: any) => User.loadSeeds(req, res),
	},
	{
		method: "patch",
		path: "/user/:id",
		handler: (req: any, res: any) => User.updateUser(req, res),
	},
	{
		method: "delete",
		path: "/user/:id",
		handler: (req: any, res: any) => User.deleteUser(req, res),
	},
];

routes.forEach((route) =>
	router.add(route.method as any, route.path, route.handler),
);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
