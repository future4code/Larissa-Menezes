import getUserWalkerData from "../data/getUserWalkerData"
import  {Authenticator}  from "../services/Authenticator"


export default async function getUserWalkerBusiness(token: any) {

        const authenticator = new Authenticator()
        const usersWalker: any = await getUserWalkerData()
        const getToken = authenticator.getTokenData(token)
      console.log(getToken)
      return (usersWalker)
    } 