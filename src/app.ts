import express, { Application, Request, Response, json } from "express"

const app: Application = express();
app.use(express.json())

app.get("/products")

app.post("/products")

const PORT: number = 3000;
app.listen(PORT, (): void => {
    console.log(`Application is running on port ${PORT}`)
})

