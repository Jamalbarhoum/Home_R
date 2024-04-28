const express = require("express");
const { getAllVilla,getVillaById } = require("../controllers/vala");

const ValRouter = express.Router();

ValRouter.get("/", getAllVilla);

ValRouter.get("/:id",getVillaById)
module.exports = ValRouter;
