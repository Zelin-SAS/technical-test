import { Router } from "express";

type METHODS = "get" | "post" | "put" | "delete" | "patch";

class AppRouter {
	public router: Router;

	constructor(expressRouter?: Router) {
		this.router = expressRouter || Router();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// Define your routes here
		this.router.get("/", this.homeRoute);
	}

	private homeRoute(req: any, res: any) {
		res.send("Hello, world!");
	}

	add(
		method: METHODS,
		path: string,
		handler: (req: any, res: any) => void,
	): void {
		this.router[method](path, handler);
	}
}

export default AppRouter;
