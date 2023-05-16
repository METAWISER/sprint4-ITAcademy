/* eslint-disable no-console */
import { json, urlencoded } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import uploadRoutes from "../routes/upload";
import userRoutes from "../routes/users";

dotenv.config();

export class Server {
	private readonly express: express.Express;

	constructor(private readonly port: string) {
		this.express = express();
		this.express.use(helmet());
		this.express.use(cors());
		this.express.use(json());
		this.express.use(urlencoded({ extended: true }));
		this.express.use(morgan("dev"));
		this.express.use(userRoutes);
		this.express.use(uploadRoutes);
	}

	async listen(): Promise<void> {
		await new Promise<void>((resolve) => {
			this.express.listen(this.port, () => {
				console.log(
					`✅ Backend App is running at http://localhost:${this.port} in ${this.express.get(
						"env"
					)} mode`
				);
				console.log("✋ Press CTRL-C to stop\n");

				resolve();
			});
		});
	}
}
