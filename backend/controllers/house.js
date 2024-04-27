const { pool } = require("../models/db");

//! http://localhost:5000/houses/    => {get}
const getAllHouse = (req,res)=>{
    const query = `select * from houses`
    
    pool.query(query).then((result)=>{
    res.status(200).json({
      message:"Successful",
      count:result.rowCount,
      result:result.rows
    })
    }).catch((error)=>{
      res.status(500).json({
        message:"error",
        error:error
      }) 
    })
    }

    module.exports = {getAllHouse}
    