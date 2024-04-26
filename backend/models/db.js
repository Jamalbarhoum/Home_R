const { Pool } = require("pg");

const connectionString = process.env.URL_DB;
console.log("pool=>"+connectionString);
const pool = new Pool({
  connectionString,
});

pool.connect((err, pool) => {
  if (err) {
    console.log("err", err);
    console.error("client didn't connect", err.message, err.stack);
    return;
  }

  console.log("pool connected on " + pool.user);
});
const CreateTable = () => {
  pool
    .query(
      `CREATE TABLE properties (
        property_id SERIAL PRIMARY KEY,
        property_type VARCHAR(50) NOT NULL,
        address VARCHAR(100) NOT NULL,
        city VARCHAR(50) NOT NULL,
        bedrooms INTEGER,
        bathrooms INTEGER,
        price INTEGER NOT NULL,
        description TEXT,
        publication_date DATE DEFAULT CURRENT_DATE,
        image VARCHAR(50)  NOT NULL,
        sold BOOLEAN DEFAULT FALSE
    );`
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// CreateTable()
module.exports = { pool };