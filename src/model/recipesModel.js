const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createRecipe = async ({ name, ingredients, preparation, userId }) => {
  const recipe = await connection()
    .then((db) => db.collection('recipes').insertOne({ name, ingredients, preparation, userId }));
    return {
      name,
      ingredients,
      preparation,
      userId,
      _id: recipe.insertedId,
    };
  };

const getRecipes = async () => {
  const recipes = await connection()
    .then((db) => db.collection('recipes').find().toArray());
    return recipes;
};

const getRecipeById = async (id) => {
  const recipeById = await connection()
    .then((db) => db.collection('recipes').findOne({ _id: ObjectId(id) }));
    return recipeById;
};

const updateRecipe = async ({ id, name, ingredients, preparation }) => {
  const update = await connection();
    return update.collection('recipes')
    .findOneAndUpdate({ _id: ObjectId(id) },
      { $set: { name, ingredients, preparation } });
};

const deleteRecipe = async (id) => {
  const deleteData = await connection()
    .then((db) => db.collection('recipes').findOneAndDelete({ _id: ObjectId(id) }));
    return deleteData;
};

const addImageToRecipe = async ({ id, imageLink }) => {
  const addImage = await connection()
    .then((db) => db.collection('recipes')
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { image: imageLink } }));
    return addImage;
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  addImageToRecipe,
};