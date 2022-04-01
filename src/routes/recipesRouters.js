const express = require('express');
const multer = require('multer');

const router = express.Router();

const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  addImageToRecipe } = require('../controllers/recipesController');

const { isValidRecipe } = require('../middlewares/validations');

const { auth } = require('../middlewares/auth');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'src/uploads/');
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;
    return callback(null, `${id}.jpeg`);
  },
});

const upload = multer({ storage });

router.get('/', getRecipes);
router.post('/', isValidRecipe, auth, createRecipe);
router.get('/:id', getRecipeById);
router.put('/:id', auth, updateRecipe);
router.delete('/:id', auth, deleteRecipe);
router.put('/:id/image', upload.single('image'), auth, addImageToRecipe);
// roda avaliador novamente

module.exports = router;