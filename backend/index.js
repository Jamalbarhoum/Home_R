const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./models/db");
const app = express();

const PORT = process.env.PORT ;

app.use(express.json());
app.use(cors());





const ValRouter = require("./routes/vala");
const HousesRouter = require("./routes/house")

app.use("/Houses",HousesRouter)


app.use("/val",ValRouter)








app.use("*",(req,res)=>{
  res.status(404).json("NO Content is this path")
})



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
