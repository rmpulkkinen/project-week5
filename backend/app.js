const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const { readRecipes, createRecipe, likeRecipe } = require("./db");
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const recipes = await readRecipes();
  const response = { data: recipes };
  res.send(response);
});

app.post("/recipe", async (req, res) => {
  await createRecipe(req.body);
  res.sendStatus(200);
});

app.delete("/recipe/:recipe_id", async (req, res) => {
  await deleteRecipe(req.params.recipe_id);
  res.sendStatus(200);
});

app.post("/toggle-favorite/:id", async (req, res) => {
  await likeRecipe(req.params.id);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
