import connection from "../connection"
import { walker_userDB } from "../type";

export default async function getUserWalkerData(): Promise<walker_userDB> {
    const result = await connection.raw(`
    SELECT * FROM userWalkerTableName
    `);
    console.log(result[0][0])
    const usersWalker = result[0].map((userWalker: walker_userDB) => {
        return userWalker
    })

    return usersWalker
}