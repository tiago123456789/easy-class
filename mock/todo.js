import { v4 } from "uuid";

const todos = [
    {
        id: v4(),
        description: "Todo 1"
    },
    {
        id: v4(),
        description: "Todo 2"
    },
    {
        id: v4(),
        description: "Todo 3"
    }
];

module.exports = {
    remove(id) {
        let position;
        for (let index = 0; index < todos.length; index++) {
            if (todos[index].id == id) {
                position = index;
                break;
            }
        }


        todos.splice(position, 1);
    },

    update(id, data) {
        for (let index = 0; index < todos.length; index++) {
            if (todos[index].id == id) {
                todos[index] = {
                    ...data, 
                    id
                }
            }
        }


        return todos;
    },

    getAll() {
        return todos;
    },

    getById(id) {
        return todos.filter(item => item.id == id)
    },

    add(data) {
        data = {
            id: v4(),
            ...data
        }
        todos.push(data)
        return data;
    }
}