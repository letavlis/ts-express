import express, { Request, Response } from "express";
import * as PostService from "./posts.service";
import { BasePost, Post } from "./post.interface";

export const postsRouter = express.Router();

postsRouter.get("/", async (req: Request, res: Response)=>{
    try {
        const posts: Post[] = await PostService.findAll();
        res.status(200).send(posts);
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});