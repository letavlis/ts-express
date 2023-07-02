import { BasePost, Post } from "./post.interface";
import { Posts } from "./posts.interface";

let posts: Posts = {
    1:{
        id: 1,
        nome: "Post 1",
        descricao: "Descrição do Post 1",
        categoria: "Categoria 1"
    },
    2:{
        id: 2,
        nome: "Post 2",
        descricao: "Descrição do Post 2",
        categoria: "Categoria 2"

    }
}

export const findAll = async (): Promise<Post[]> => Object.values(posts);
export const find = async (id:number): Promise<Post> => posts[id];

export const create = async (newPost: BasePost): Promise<Post> => {
    const post = findAll();
    const id = (await post).length+1
  
    posts[id] = {
      id,
      ...newPost,
    };
  
    return posts[id];
};

export const update = async (
    id: number,
    postUpdate: BasePost
  ): Promise<Post | null> => {
    const post = await find(id);
  
    if (!post) {
      return null;
    }
  
    posts[id] = { id, ...postUpdate };
  
    return posts[id];
};

export const remove = async (id: number):Promise<null | void> => {
    const post = await find(id);
    if (!post){
        return null;
    }

    delete posts[id];
};