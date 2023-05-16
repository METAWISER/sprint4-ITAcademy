import { Router } from "express";

import { uploadImg } from "../controllers/users.controller";
import { upload } from "../middlewares/multer";

const router = Router();

router.post("/upload", upload.single("image"), uploadImg);

export default router;
