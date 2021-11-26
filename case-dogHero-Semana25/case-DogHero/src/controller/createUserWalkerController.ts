import createUserWalkerBusiness from "../business/createUserWalkerBusiness"
import {walker_user} from "../type"
import { Request,Response } from "express";


export default async function createUserWalkerController(req:Request,  res: Response){

    try {
        
        const userWal: walker_user ={
            name:req.body.name,
            email: req.body.email,
            password:req.body.password
        }
        
        
        const token =await createUserWalkerBusiness(userWal)
        res.status(200).send(`Usuário criado com sucesso! Token: ${token}`)
        
    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
         })
    }
}