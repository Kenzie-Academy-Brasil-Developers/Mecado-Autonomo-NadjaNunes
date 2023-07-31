import { Request, Response, json } from "express"
import Products from "./interfaces"
import market from "./database"

const create = (req: Request, res: Response): Response => {
    const newProducts: Products = {
        ...req.body,
        id: market.length + 1,
        createAt: new Date(),
    }
    market.push(newProducts)
    return res.status(201).json(newProducts)
}

const read = (req: Request, res: Response): Response => {
    return res.status(200).json({ total: market.length, market })
}

const retrieve = (req: Request, res: Response): Response  =>{
    return res.status(200).json(res.locals.foundProducts)  
}

const destroy =  (req: Request, res: Response): Response => {
    const {id} = req.params; 
    const productsIndex: number = market.findIndex(
        (v: Products): boolean =>  v.id === parseInt(id)
    )
    if(productsIndex === -1){
        return res.status(404).json({message: "Product not found."})
    }
    market.splice(productsIndex, 1)
    return  res.status(204).json()
}

const updated =  (req: Request, res: Response): Response => {
    const { productsIndex } = res.locals
    const updating = (market[productsIndex] = {
        ...market[productsIndex],
        ...req.body,
    })
    return  res.status(200).json(updating)
}

export default { create, read, retrieve, destroy, updated }