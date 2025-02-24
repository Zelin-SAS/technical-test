import mysql from "mysql2";
import Database, { UserAttributes } from "../services/database";
import userSeeds from "../seeds/user";
import { log } from "console";

export default class User {
	private static database: Database;
	private static seeds: UserAttributes[];

	constructor(private attributes?: UserAttributes) {}

	static setDatabase(database: Database) {
		User.database = database;
		User.seeds = User.seeds || userSeeds;
	}

	private static isDatabaseSet(): void {
		if (!User.database) {
			throw new Error("Database not set");
		}
	}

	static getAllUsers(req: any, res: any): void {
		User.isDatabaseSet();
		User.database.query(
			"SELECT * FROM users",
			[],
			async (err: Error | null, results?: mysql.RowDataPacket[]) => {
				if (err) {
					res.status(500).send(err);
				} else {
					const users = results
						? results.map(
								(row: any) =>
									new User({
										id: row.id,
										username: row.username,
										userlastname: row.userlastname,
										email: row.email,
										password: row.password,
									}).attributes,
							)
						: [];
					res.send(users);
				}
			},
		);
	}

	static async getUserByEmail(email: string): Promise<UserAttributes | null> {
		User.isDatabaseSet();
		return new Promise((resolve, reject) => {
			User.database.query(
				"SELECT * FROM users WHERE email = ?",
				[email],
				(err: Error | null, results?: mysql.RowDataPacket[]) => {
					if (err) {
						reject(err);
					} else {
						const userResults = results as UserAttributes[];
						resolve(userResults?.length ? userResults[0] : null);
					}
				},
			);
		});
	}

	static async addUser(req: any, res: any): Promise<void> {
		const { username, userlastname, email, password } = req.body;
		User.isDatabaseSet();
		User.database.query(
			"INSERT INTO users (username, userlastname, email, password) VALUES (?, ?, ?, ?)",
			[username, userlastname, email, password],
			async (err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					const user = new User({
						id: result?.insertId || 0,
						username,
						userlastname,
						email,
						password,
					}).attributes;
					res.send(user);
				}
			},
		);
	}

	static async updateUser(req: any, res: any): Promise<void> {
		const id = req.params.id;
		const { username, userlastname, email, password } = req.body;
		User.isDatabaseSet();
		User.database.query(
			"UPDATE users SET username = ?, userlastname = ?, email = ?, password = ? WHERE id = ?",
			[username, userlastname, email, password, id],
			(err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			},
		);
	}

	static async deleteUser(req: any, res: any): Promise<void> {
		const id = req.params.id;
		User.isDatabaseSet();
		User.database.query(
			"DELETE FROM users WHERE id = ?",
			[id],
			async (err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			},
		);
	}

	static async login(req: any, res: any): Promise<void> {
		const { email, password } = req.body;
		User.isDatabaseSet();
		User.database.query(
			"SELECT * FROM users WHERE email = ? AND password = ?",
			[email, password],
			async (err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					if (result && Array.isArray(result) && result.length > 0) {
						res.send({
							email: result[0].email,
							username: result[0].username,
							userlastname: result[0].userlastname,
						});
					} else {
						res.status(404).send({ message: "User not found" });
					}
				}
			},
		);
	}

	static async loadSeeds(req: any, res: any): Promise<void> {
		User.isDatabaseSet();
		User.database.query(
			"INSERT INTO users (id, username, userlastname, email, password) VALUES ?",
			[User.seeds.map((seed) => Object.values(seed))],
			(err: Error | null, result?: mysql.ResultSetHeader) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(result);
				}
			},
			true,
		);
	}
}
