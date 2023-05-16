import { Request, Response } from "express";

export const uploadImg = (req: Request, res: Response): Response => {
	if (!req.file) {
		return res.status(400).json({ Error: "El archivo debe ser una imagen JPEG, JPG, PNG o GIF." });
	}

	return res.status(202).json({ message: "Archivo subido exitosamente." });
};

export const getUser = (req: Request, res: Response): Response => {
	const { protocol, headers, url } = req;
	const { host } = headers;
	const fullUrl = `${protocol}://${host}${url}`;

	return res.json({
		name: "Carlos",
		age: 32,
		fullUrl,
	});
};
