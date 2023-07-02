"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.findAll = void 0;
let posts = {
    1: {
        id: 1,
        nome: "Post 1",
        descricao: "Descrição do Post 1",
        categoria: "Categoria 1"
    },
    2: {
        id: 2,
        nome: "Post 2",
        descricao: "Descrição do Post 2",
        categoria: "Categoria 2"
    }
};
const findAll = async () => Object.values(posts);
exports.findAll = findAll;
const find = async (id) => posts[id];
exports.find = find;
