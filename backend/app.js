const express = require("express");
const app = express();
const port = 3000;

const { readRecipes, createRecipe } = require("./db");

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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
