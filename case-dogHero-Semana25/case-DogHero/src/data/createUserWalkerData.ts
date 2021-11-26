import connection from "../connection"
import {walker_userDB } from "../type";

export default async function createUserWalkerData(userWalkerDB: walker_userDB):Promise<void> {
    
    await connection.raw(`
    INSERT INTO userWalkerTableName (id, name, email, password)
    VALUES ('${userWalkerDB.id}', '${userWalkerDB.name}','${userWalkerDB.email}','${userWalkerDB.password}');
    `)
   
}