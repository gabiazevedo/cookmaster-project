const rescue = require('express-rescue');
const services = require('../services/recipesServices');

const createRecipe = rescue(async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id: userId } = req.user; 
  const result = await services.createRecipe({ name, ingredients, preparation, userId });
  return res.status(201).json({ recipe: result });
});

const getRecipes = rescue(async (_req, res) => {
  const result = await services.getRecipes();
  return res.status(200).json(result);
});

const getRecipeById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await services.getRecipeById(id);

  if (!result) {
    return res.status(404).json({ message: 'recipe not found' });
  }
  return res.status(200).json(result);
});

const updateRecipe = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const { _id: userId, role } = req.user;

  const result = await services.updateRecipe({ id, name, ingredients, preparation, userId, role });
  return res.status(200).json(result);
});

const deleteRecipe = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await services.deleteRecipe(id);
  return res.status(204).send(result);
});

const addImageToRecipe = rescue(async (req, res) => {
  const { id } = req.params;
  const { _id: userId, role } = req.user;
  const result = await services.addImageToRecipe({ id, userId, role });

  return res.status(200).json(result);
});

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  addImageToRecipe,
};