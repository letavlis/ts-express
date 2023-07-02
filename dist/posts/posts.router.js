"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = __importDefault(require("express"));
const PostService = __importStar(require("./posts.service"));
exports.postsRouter = express_1.default.Router();
//GET posts
exports.postsRouter.get("/", async (req, res) => {
    try {
        const posts = await PostService.findAll();
        res.status(200).send(posts);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//GET posts/:id
exports.postsRouter.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const post = await PostService.find(id);
        if (post) {
            return res.status(200).send(post);
        }
        res.status(404).send("Post not found");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//POST posts
exports.postsRouter.post("/", async (req, res) => {
    try {
        const post = req.body;
        const newPost = await PostService.create(post);
        res.status(200).json(newPost);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//PUT posts/:id
exports.postsRouter.put("/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const postUpdate = req.body;
        const existingPost = await PostService.find(id);
        if (existingPost) {
            const updatedPost = await PostService.update(id, postUpdate);
            return res.status(200).json(updatedPost);
        }
        const newPost = await PostService.create(postUpdate);
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//DELETE posts/:id
exports.postsRouter.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await PostService.remove(id);
        res.sendStatus(204);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
