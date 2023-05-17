import { Router } from "express";

import { getUser } from "../controllers/users.controller";

const router = Router();

router.get("/user", getUser);

export default router;
