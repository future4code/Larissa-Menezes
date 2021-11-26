import {Request, Response} from "express"
import getUserPetBusiness from "../business/getUserPetBusiness"

export default async function getUserPetController(req: Request, res: Response) {
try {
    
    const token: string = req.headers.authorization!
    const result= await getUserPetBusiness(token)


res.status(200).send(`${result}`)
} catch (error: any) {
    
}

}