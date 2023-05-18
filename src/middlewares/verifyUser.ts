import { NextFunction, Request, Response } from "express";

export const verifyUser = (req: Request, res: Response, next: NextFunction): void => {
	const { authorization } = req.headers;

	const user = process.env.USER;
	const pass = process.env.PASS;
	if (!user || !pass) {
		res.status(500).json({ Error: "Error del servidor." });

		return;
	}

	if (authorization) {
		const token = authorization.split(" ")[1];
		const [username, password] = Buffer.from(token, "base64").toString().split(":");

		if (username === user && password === pass) {
			next();
		}
	}
	res.status(401).json({ Error: "No autorizado." });
};
