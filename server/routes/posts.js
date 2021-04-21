import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
const router = express.Router();

//calback funcs always req and response
router.get("/", getPosts);
router.post("/", createPost);

export default router;
