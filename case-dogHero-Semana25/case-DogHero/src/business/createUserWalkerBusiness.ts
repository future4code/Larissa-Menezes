import createUserWalkerData from "../data/createUserWalkerData"
import IdGenerator from "../services/IdGeneretor"
import HashManager from "../services/HashManager"
import {Authenticator} from "../services/Authenticator"
import {walker_user, walker_userDB} from "../type"
import getUserWalkerData from "../data/getUserWalkerData"



export default async function createUserWalkerBusiness(userWalker: walker_user){

    try {
        
        
        if(!userWalker.name||!userWalker.email||!userWalker.password){
            throw new Error('Nome, email e password são campos obrigatórios!')
        }
        if(userWalker.password.length<=8){
            throw new Error(`sua senha tem ${userWalker.password.length} e deve ter 6 digitos ou mais digitos`)
        }
        const idGenerator= new IdGenerator
        const hashManager = new HashManager
        const authenticator = new Authenticator


        const idWalker = idGenerator.generateId()
        console.log("ID", idWalker)
        
        const cypherPassword = await hashManager.hash(userWalker.password)
        
        const walkerUserDB: walker_userDB = {
            id:idWalker,
            name:userWalker.name,
            email:userWalker.email,
            password:cypherPassword
        }

        const tokenBusiness = authenticator.generateToken({idWalker})
        
        await createUserWalkerData(walkerUserDB)
        return tokenBusiness
        
    } catch (error:any) {
        throw new Error(`${error.message}`)
           
        
    }
        
}