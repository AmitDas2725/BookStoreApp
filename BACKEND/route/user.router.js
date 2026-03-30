import express from 'express';
import { signup, login } from '../controller/user.controller.js'; // 1. Import login

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login); // 2. Add the login route

export default router;