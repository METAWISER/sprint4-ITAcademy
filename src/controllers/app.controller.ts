import { Request, Response } from "express";

export const uploadImg = (req: Request, res: Response): Response => {
	if (!req.file) {
		return res.status(400).json({ Error: "El archivo debe ser una imagen JPEG, JPG, PNG o GIF." });
	}

	return res.status(202).json({ message: "Archivo subido exitosamente." });
};

export const getUserTime = (req: Request, res: Response): Response => {
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

export const getPokemon = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await response.json();

		// Extrae los datos necesarios del objeto "data"
		const { name, height, weight } = data;

		return res.json({
			name,
			height,
			weight,
		});
	} catch (error) {
		// Manejo de errores
		console.error(error);

		return res.status(500).json({ error: "Ocurrió un error al obtener el Pokémon." });
	}
};
