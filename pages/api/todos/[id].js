import todo from "../../../mock/todo"

const actions = {
    DELETE: (req, res) => {
        todo.remove(req.query.id)
        res.json(todo.getAll())
    },
    PUT: (req, res) => {
        todo.update(req.query.id, req.body)
        res.json(todo.getAll())
    },
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