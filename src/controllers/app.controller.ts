import { Request, Response } from "express";

export const uploadImg = (req: Request, res: Response): Response => {
	if (!req.file) {
		return res.status(400).json({ Error: "El archivo debe ser una imagen JPEG, JPG, PNG o GIF." });
	}

	return res.status(202).json({ message: "Archivo subido exitosamente." });
};

export const getUserTime = (req: Request, res: Response): Response => {
	if (!req.body.username) {
		res.status(400).json({ Error: "El campo username es requerido." });

		if (req.body.username === "") {
			res.status(400).json({ Error: "El campo name no puede estar vacío." });
		}
	}
	const currentDate = new Date();

	const response = {
		currentTime: currentDate.toISOString(),
	};

	return res.status(200).json(response);
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

export const getPokemon = (req: Request, res: Response): void => {
	const { id } = req.params;
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((res) => res.json())
		.then((json) => {
			const { name, height, weight } = json;
			res.json({ name, height, weight });
		})
		.catch((err: Error) => {
			res.status(500).json({ Error: err.message });
		});
};
