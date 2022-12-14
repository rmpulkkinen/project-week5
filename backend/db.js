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

async function createRecipe(recipe) {
  console.log(recipe);
  let today = new Date();
  await pool.query(
    `INSERT INTO recipebook (header, recipe, author, date, "imageUrl", intro) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      recipe.header,
      recipe.recipe,
      recipe.author,
      today.toISOString(),
      recipe.imageUrl,
      recipe.intro,
    ]
  );
}

async function likeRecipe(id) {
  await pool.query(`UPDATE recipebook SET likes = likes +1 WHERE id=$1`, [id]);
}

//likeRecipe(2);

module.exports = { readRecipes, createRecipe, likeRecipe };
async function deleteRecipe(id) {
  await pool.query("DELETE FROM recipebook WHERE id=$1;", [id]);
  console.log(`Poistettu ID:${id} taulusta recipebook`);
}

module.exports = { readRecipes, createRecipe, deleteRecipe, likeRecipe };
//readRecipes();
