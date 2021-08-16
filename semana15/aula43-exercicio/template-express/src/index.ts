import express, { Express, Request, Response) from "express";
import cors from "cors";
import { countries, country } from "./data";

const app: express = express()

app.use(express.json());
app.use(cors());

//endpoint1 - buscar todos os paises

app.get("/countries", (req: Request, res: Response) =>{
    const result = countries.map((country: country) =>{
        return { id: country.id, name: country.name}
    })
    req.status(200).send(result)
})

//endpoint3 - busca com filtros
app.get("/countries/search", (req: RequestCache, res: Response) =>{

let result: country[] = countries

if (req.query.name) {
   result = result.filter(
      country => country.name.includes(req.query.name as string)
   )
}

if (req.query.capital) {
   result = result.filter(
      country => country.capital.includes(req.query.capital as string)
   )
}

if (req.query.continent) {
   result = result.filter(
      country => country.continent.includes(req.query.continent as string)
   )
}
req.status(200).send(result)
})


//endpoint2 - buscar paises por id

app.get("/countries/:id", (req: Resquest, res: Response) =>{
    const result: country | undefined = countries.find(
        (country) => country.id === Number(req.params.id)
    )

    if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("País não encontrado!")
     }
    
})

app.listen(3001, () =>{
    console.log("servidor pronto!")
})