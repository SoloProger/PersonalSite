import Router from "express";
import PostController from "../controllers/PostController.js";
const postRouter = new Router();

// Post routes
postRouter.post("/add", PostController.addPost);
postRouter.get("/all", PostController.getPosts);
postRouter.get("/:id", PostController.getPost);

export default postRouter;