const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

async function readRecipes() {
  try {
    const res = await pool.query(`SELECT * FROM recipebook`);
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err?.stack);
  }
}

module.exports = { readRecipes };
//readRecipes();
