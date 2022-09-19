const express = require("express");
const app = express();
const port = 3000;

const { readRecipes } = require("./db");

app.use(express.json());

app.get("/", async (req, res) => {
  const recipes = await readRecipes();
  const response = { data: recipes };
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
