import createUserPetBusiness from "../business/createUserPetBusiness"
import {pet_user} from "../type"
import { Request,Response } from "express";


export default async function createUserPetController(req:Request,  res: Response){

    try {
        
        const userPe: pet_user ={
            name:req.body.name,
            email: req.body.email,
            password:req.body.password
        }
        
        
        const token =await createUserPetBusiness(userPe)
        res.status(200).send(`Usuário criado com sucesso! Token: ${token}`)
        
    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
         })
    }
}