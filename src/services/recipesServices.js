const { ObjectId } = require('mongodb');
const model = require('../model/recipesModel');

const createRecipe = async ({ name, ingredients, preparation, userId }) => {
  const result = await model.createRecipe({ name, ingredients, preparation, userId });
  return result;
};

const getRecipes = async () => {
  const result = await model.getRecipes();
  return result;
};

const getRecipeById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const result = await model.getRecipeById(id);
  return result;
};

const updateRecipe = async ({ id, name, ingredients, preparation, userId, role }) => {
  if (!ObjectId.isValid(id)) return null;

  const wrongRecipe = await model.getRecipeById(id);

  if (wrongRecipe.userId === userId || role === 'admin') {
    await model.updateRecipe({ id, name, ingredients, preparation });
  }
  return {
    _id: id,
    name,
    ingredients,
    preparation,
    userId,
  };
};

const deleteRecipe = async (id) => {
  if (ObjectId.isValid(id)) return null;
  const result = await model.deleteRecipe(id);
  return result;
};

const addImageToRecipe = async ({ id, userId, role }) => {
  if (!ObjectId.isValid(id)) return null;
  const result = await model.getRecipeById(id);
  const recipeImageLink = `localhost:3000/src/uploads/${id}.jpeg`;

  if (result.userId === userId || role === 'admin') {
    await model.addImageToRecipe({ id, recipeImageLink });
  }
  return {
    _id: id,
    name: result.name,
    ingredients: result.ingredients,
    preparation: result.preparation,
    userId: result.userId,
    image: recipeImageLink,
  };
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  addImageToRecipe,
};
