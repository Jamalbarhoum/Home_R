const express = require("express");
const { getAllVilla } = require("../controllers/vala");

const ValRouter = express.Router();

ValRouter.get("/", getAllVilla);

module.exports = ValRouter;
