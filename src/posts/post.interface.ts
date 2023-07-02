export interface BasePost {
    nome: string;
    descricao: string;
    categoria: string;
  }
  
  export interface Post extends BasePost {
    id: number;
  }