import express from "express";
import { getBook } from "../controller/book.controller.js"; // This 'picks up' the export from the controller

const router = express.Router();

router.get("/", getBook);

export default router;