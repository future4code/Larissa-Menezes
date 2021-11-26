import app from "./app"
import getUserWalkerController from "../src/controller/getUserWalkerController"
import getUserPetController from "../src/controller/getUserPetController"
//import getDogWalkingController from "../src/controller/getDogWalkingController"
import createUserWalkerController from "../src/controller/createUserWalkerController"
import createUserPetController from "../src/controller/createUserPetController"
//import createDogWalkingController from "../src/controller/createDogWalkingController"

app.get('/userWalker', getUserWalkerController)

app.get('userPet', getUserPetController)

//app.get('/dogWalking', getDogWalkingController)

app.post('/userWalker', createUserWalkerController)

app.post('/userPet', createUserPetController)

//app.post('/dogWalking', createDogWalkingController)


