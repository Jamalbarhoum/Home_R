const express =require("express")
const { getAllHouse } = require("../controllers/house")


const HousesRouter = express.Router()
HousesRouter.get("/",getAllHouse)



module.exports = HousesRouter