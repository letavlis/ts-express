"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
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
const create = async (newPost) => {
    const post = (0, exports.findAll)();
    const id = (await post).length + 1;
    posts[id] = {
        id,
        ...newPost,
    };
    return posts[id];
};
exports.create = create;
const update = async (id, itemUpdate) => {
    const item = await (0, exports.find)(id);
    if (!item) {
        return null;
    }
    posts[id] = { id, ...itemUpdate };
    return posts[id];
};
exports.update = update;
const remove = async (id) => {
    const item = await (0, exports.find)(id);
    if (!item) {
        return null;
    }
    delete posts[id];
};
exports.remove = remove;
