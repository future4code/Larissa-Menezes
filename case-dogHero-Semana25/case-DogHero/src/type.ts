export type AuthenticationData = {
    id: string
    role: string
    
}

export type walker_user = {
    
    name: string 
    email: string 
    password: string 
}

export type walker_userDB = {
    id: string 
    name: string 
    email: string 
    password: string 
}
export type pet_user = {
    name: string 
    email: string 
    password: string 
}
export type pet_userDB = {
    id: string 
    name: string 
    email: string 
    password: string 
}

export type dogWalking = {
status: string
data: number
preco: number
duracao: number
latitude: number
longitude: number
pets: string
horario_De_Inicio: number 
horario_De_Fim: number
}

export type dogWalkingDB = {
    id: string
    status: string
    data: number
    preco: number
    duracao: number
    latitude: number
    longitude: number
    pets: string
    horario_De_Inicio: number 
    horario_De_Fim: number
    }

export const userWalkerTableName = "walker_user"
export const userPetTableName = "pet_user"
export const dogWalkingTable = "dogWalking"

