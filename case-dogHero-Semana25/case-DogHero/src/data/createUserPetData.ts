import connection from "../connection"
import {pet_userDB} from "../type";

export default async function createUserPetData(userPetDB: pet_userDB):Promise<void> {
    
    await connection.raw(`
    INSERT INTO userPetTableName (id, name, email, password)
    VALUES ('${userPetDB.id}', '${userPetDB.name}','${userPetDB.email}','${userPetDB.password}');
    `)
   
}