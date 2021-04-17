const express = require("express")
const app = express()

const productRouter = require("./router/product")
const orderRouter = require("./router/order")

app.use("/product", productRouter)
app.use("/order", orderRouter)

const PORT = 5000

app.listen(PORT, console.log("서버 실행"))