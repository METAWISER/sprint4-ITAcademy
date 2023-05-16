import express from "express";
import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, `${process.cwd()}/uploads`);
	},
	filename(req, file, cb) {
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
		cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
	},
});

export const fileFilter = (
	req: express.Request,
	file: Express.Multer.File,
	cb: multer.FileFilterCallback
): void => {
	const filetypes = /jpeg|jpg|png|gif/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);
	if (extname && mimetype) {
		cb(null, true);
	}
	cb(null, false);
};

export const upload = multer({ storage, fileFilter });
