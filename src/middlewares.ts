import { NextFunction, Request, Response } from "express";
import Products from "./interfaces";
import market from "./database";

const checkId = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params; 
    const productsIndex: number = market.findIndex(
        (v: Products): boolean =>  v.id === Number(id)
    )
    if(productsIndex === -1){
        return res.status(404).json({message: "Product not found."})
    }
    const foundProducts = market[productsIndex]
    res.locals = { ...res.locals, productsIndex, foundProducts}
    return next()
}

export default { checkId }