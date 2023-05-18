import { Router } from "express";

import { getPokemon, getUser, getUserTime, uploadImg } from "../controllers/app.controller";
import { upload } from "../middlewares/multer";
import { noCache } from "../middlewares/noCache";
import { verifyUser } from "../middlewares/verifyUser";

const router = Router();

// Returns a json with the user's name, age and the full url
router.get("/user", getUser);
// Uploads an image to the server
router.post("/upload", upload.single("image"), uploadImg);
// Returns a json with the current time
router.post("/time", verifyUser, noCache, getUserTime);
// Returns a json with the pokemon's name, height and weight by its id
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/pokemon/:id", getPokemon);

export default router;
