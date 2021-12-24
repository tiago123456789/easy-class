import todo from "../../mock/todo"

const actions = {

    GET: (req, res) => {
        res.json(todo.getAll())
    },
    POST: (req, res) => {
        const newTodo = todo.add(req.body);
        res.json(newTodo)
    }
}

export default async function(req, res) {
    if (actions[req.method]) {
        await actions[req.method](req, res);
    } else {
        res.status(500).json({
            error: "Interval server error"
        })
    }
}