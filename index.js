const { request } = require("express");
const express = require("express")
const app = express();

const productsByClient = {
    "test.app.br": [
        { name: "test product", price: 10.00 },
        { name: "test product ", price: 10.00 },
    ],
    "test2.app.br": [
        { name: "test2 product", price: 15.00 },
        { name: "test2 product", price: 15.00 },
    ]
}

app.use(express.json());

app.get("/configs", (request, response) => {
    const referer = (request.headers.referer)
    const configs = {
        "test.app.br": {
            layout: "L1"
        },
        "test2.app.br": {
            layout: "L2"
        }
    }
    response.json(configs[referer])
})

app.get("/products", (request, response) => {
    const referer = (request.headers.referer)
    response.json(productsByClient[referer])
})

app.listen(4000, () => console.log("Server is running address: http://localhost:4000"))