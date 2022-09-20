const express = require("express")
var cors = require("cors")
const app = express()
app.use(cors())
const port = 3000

const { readRecipes, createRecipe, deleteRecipe } = require("./db")

app.use(express.json())

app.get("/", async (req, res) => {
  const recipes = await readRecipes()
  const response = { data: recipes }
  res.send(response)
})

app.post("/recipe", async (req, res) => {
  await createRecipe(req.body)
  res.sendStatus(200)
})

app.delete("/recipe/:recipe_id", async (req, res) => {
  await deleteRecipe(req.params.recipe_id)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
