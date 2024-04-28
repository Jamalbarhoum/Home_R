const { pool } = require("../models/db");

//!         http://localhost:5000/val/      API method =>get
const getAllVilla = (req, res) => {
  query = "select * from properties";

  pool
    .query(query)
    .then((result) => {
        res.status(200).json({
            message: "Successful",
            result: result.rows,
          });
    })
    .catch((err) => {
        res.status(500).json({
            message: "error",
            result: err,
          });
    });
};



//! http://localhost:5000/val/numbar     {get}
const getVillaById = (req,res)=>{


  const query = `SELECT * FROM properties WHERE properties.id = ${req.params.id}`

  pool.query(query).then((result)=>{
    if(result.rows.length < 1) {
      res.status(404).json({
        message:"No result",
        result:result.rows
      })
      return 
    }
    res.status(200).json({
      message:"Successful",
      result:result.rows
    })
  }).catch((err)=>{
    console.log(err);
    res.status(200).json({
      message:"error",
      result:err
    })
  })
}





module.exports = { getAllVilla ,getVillaById};
