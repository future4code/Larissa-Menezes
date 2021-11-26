import {Request, Response} from "express"
import getUserWalkerBusiness from "../business/getUserWalkerBusiness"

export default async function getUserWalkerController(req: Request, res: Response) {
try {
    
    const token: string = req.headers.authorization!
    const result= await getUserWalkerBusiness(token)


res.status(200).send(`${result}`)
} catch (error: any) {
    
}

}