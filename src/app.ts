import express, { Application} from "express"
import logics from "./logics"
import middlewares from "./middlewares"

const app: Application = express()
app.use(express.json())

app.get("/products", logics.create)

app.post("/products", logics.read)

app.get("/products/:id", middlewares.checkId, logics.retrieve)

app.delete("/products/:id", middlewares.checkId, logics.destroy)

app.patch("/products/:id", middlewares.checkId, logics.updated)

const PORT: number = 3000
app.listen(PORT, (): void => {
    console.log(`Application is running on port ${PORT}`)
})

