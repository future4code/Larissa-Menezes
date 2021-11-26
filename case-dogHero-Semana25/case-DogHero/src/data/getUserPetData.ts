import connection from "../connection"
import { pet_userDB } from "../type";

export default async function getUserWalkerData(): Promise<pet_userDB> {
    const result = await connection.raw(`
    SELECT * FROM userPetTableName
    `);
    console.log(result[0][0])
    const usersPet = result[0].map((userPet: pet_userDB) => {
        return userPet
    })

    return usersPet
}