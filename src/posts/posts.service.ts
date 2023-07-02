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
export const create = async (newItem: BasePost): Promise<Post> => {
    const id = new Date().valueOf();
  
    posts[id] = {
      id,
      ...newItem,
    };
  
    return posts[id];
};
