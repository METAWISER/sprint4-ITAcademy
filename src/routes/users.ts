import { Router } from "express";

import { getUser } from "../controllers/users.controller";

const router = Router();

router.get("/user", getUser);
/* router.post('/upload',upload.single('image'), uploadImg) */

export default router;
