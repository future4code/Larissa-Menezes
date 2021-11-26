import getUserPetData from "../data/getUserPetData"
import  {Authenticator}  from "../services/Authenticator"


export default async function getUserPetBusiness(token: any) {

        const authenticator = new Authenticator()
        const usersPet: any = await getUserPetData()
        const getToken = authenticator.getTokenData(token)
      console.log(getToken)
      return (usersPet)
    } 