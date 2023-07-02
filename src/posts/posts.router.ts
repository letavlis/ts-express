import express, { Request, Response } from "express";
import * as PostService from "./posts.service";
import { BasePost, Post } from "./post.interface";

export const postsRouter = express.Router();

//GET posts
postsRouter.get("/", async (req: Request, res: Response)=>{
    try {
        const posts: Post[] = await PostService.findAll();
        res.status(200).send(posts);
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});

//GET posts/:id
postsRouter.get("/:id",async (req:Request, res:Response) => {
    const id:number = parseInt(req.params.id, 10);
    
    try {
        const post: Post = await PostService.find(id);

        

        if (post) {
            
            return res.status(200).send(post);
        }
        res.status(404).send("Post not found");
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});

//POST posts
postsRouter.post("/", async (req: Request, res: Response)=>{
    try {
        const post: BasePost = req.body;

        const newPost = await PostService.create(post);

        res.status(200).json(newPost);
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});

//PUT posts/:id
 postsRouter.put("/:id",async (req:Request, res:Response) => {
    const id:number = parseInt(req.params.id, 10);
    
    try {
        const postUpdate: Post = req.body;

        const existingPost: Post = await PostService.find(id);

        if (existingPost) {
            const updatedPost = await PostService.update(id, postUpdate);
            return res.status(200).json(updatedPost);
        }
        const newPost = await PostService.create(postUpdate);
        res.status(201).json(newPost);
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});