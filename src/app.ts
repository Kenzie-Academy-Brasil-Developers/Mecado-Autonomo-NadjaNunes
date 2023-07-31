import express, { Application} from "express"
import logics from "./logics"
import middlewares from "./middlewares"

const app: Application = express()

app.use(express.json())

app.get("/products", logics.read)

app.post("/products", middlewares.checkName, logics.create)

app.get("/products/:id", middlewares.checkId, logics.retrieve)

app.delete("/products/:id", middlewares.checkId, logics.destroy)

app.patch("/products/:id", middlewares.checkId, middlewares.checkName, logics.updated)

const PORT: number = 3000
app.listen(PORT, (): void => {
    console.log(`Application is running on port ${PORT}`)
})

