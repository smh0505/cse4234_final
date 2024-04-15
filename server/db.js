import mongoose from "mongoose"
import recipes from "./recipes.json" with { type: "json" }

let db = mongoose.connection;
db.on("open", () => {
  console.log("hello world!");
});

let recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  recipeYield: String,
  cookTime: String,
  prepTime: String,
  ingredients: [String]
})

let Recipe = mongoose.model('Recipe', recipeSchema)

export const migrate = async () => {
  await Recipe.deleteMany()
  await Recipe.insertMany(recipes.slice(0, 782))
  return await Recipe.countDocuments()
}

export const getDocs = async (filter) => {
  return await Recipe.find({
    $or: [
      { name: { $regex: RegExp(filter, "i") } },
      { description: { $regex: RegExp(filter, "i") } },
      { ingredients: { $regex: RegExp(filter, "i") } },
    ]
  })
}

export const start = () => {
  mongoose.connect("mongodb://localhost:27017/recipes-6")
}
