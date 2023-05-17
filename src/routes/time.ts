import { Router } from "express";

import { getUserTime } from "../controllers/users.controller";
import { cache } from "../middlewares/cache";

const router = Router();

router.post("/time", cache, getUserTime);
export default router;
