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

module.exports = { getAllVilla };
