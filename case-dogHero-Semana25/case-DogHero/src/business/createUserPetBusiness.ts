import createUserPetData from "../data/createUserPetData"
import IdGenerator from "../services/IdGeneretor"
import HashManager from "../services/HashManager"
import {Authenticator} from "../services/Authenticator"
import {pet_user, pet_userDB} from "../type"
import getUserPetData from "../data/getUserPetData"



export default async function createUserPetBusiness(userPet: pet_user){

    try {
        
        
        if(!userPet.name||!userPet.email||!userPet.password){
            throw new Error('Nome, email e password são campos obrigatórios!')
        }
        if(userPet.password.length<=8){
            throw new Error(`sua senha tem ${userPet.password.length} e deve ter 6 digitos ou mais digitos`)
        }
        const idGenerator= new IdGenerator
        const hashManager = new HashManager
        const authenticator = new Authenticator


        const idPet = idGenerator.generateId()
        console.log("ID", idPet)
        
        const cypherPassword = await hashManager.hash(userPet.password)
        
        const petUserDB: pet_userDB = {
            id:idPet,
            name:userPet.name,
            email:userPet.email,
            password:cypherPassword
        }

        const tokenBusiness = authenticator.generateToken({idPet})
        
        await createUserPetData(petUserDB)
        return tokenBusiness
        
    } catch (error:any) {
        throw new Error(`${error.message}`)
           
        
    }
}
