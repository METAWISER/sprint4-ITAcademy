import { Router } from "express";

import { getUser, getUserTime } from "../controllers/users.controller";
import { cache } from "../middlewares/cache";

const router = Router();

router.get("/user", getUser);
/* router.post('/upload',upload.single('image'), uploadImg) */
router.post("/time", cache, getUserTime);
export default router;
