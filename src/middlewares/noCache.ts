import { NextFunction, Request, Response } from "express";

export const noCache = (req: Request, res: Response, next: NextFunction): void => {
	res.setHeader("Cache-control", "no-cache");
	next();
};
