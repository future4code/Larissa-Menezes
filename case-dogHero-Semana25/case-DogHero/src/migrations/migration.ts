import connection from "../connection";
import {userWalkerTableName, userPetTableName, dogWalkingTable} from "../type"

connection.raw(`
CREATE TABLE IF NOT EXISTS ${userWalkerTableName} ( 
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${userPetTableName} ( 
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${dogWalkingTable} ( 
    passeador_id VARCHAR PRIMARY KEY(255) NOT NULL,
    FOREIGN KEY (passeador_id) REFERENCES ${userWalkerTableName} (id)
    pet_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (passeador_id) REFERENCES ${userPetTableName} (id)
    nome_pet VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    data DATE NOT NULL NOT NULL,
    preco DECIMAL(4,2) NOT NULL,
    latitude INT NOT NULL,
    longitude INT NOT NULL,
    duracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    horario_de_inicio TIME NOT NULL,
    horario_de_fim TIME NOT NULL
);
`).then(() => console.log(
    "MySql tables were successfully created"
)).catch(error => 
    console.log(error.message)
    ).finally(()=> {
        connection.destroy()
    })