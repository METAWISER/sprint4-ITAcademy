import { NextFunction, Request, Response } from "express";

export const verifyUser = (req: Request, res: Response, next: NextFunction): Response | void => {
	if (req.body.name === undefined) {
		return res.status(401).json({ Error: "El campo name es requerido." });
	}
	next();
};
