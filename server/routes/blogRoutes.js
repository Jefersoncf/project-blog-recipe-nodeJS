const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

router.get('/', blogController.homepage);

router.get('/about', blogController.about);


router.get('/recipe/:id', blogController.exploreRecipe);

router.get('/categories', blogController.exploreCategories);

router.get('/categories/:id', blogController.exploreCategoriesId);

router.post('/search', blogController.searchRecipe);

router.get('/explore-latest', blogController.exploreLatest);

router.get('/explore-random', blogController.exploreRandom);

router.get('/submit-recipe', blogController.submitRecipe);

router.post('/submit-recipe', blogController.submitRecipePost);



module.exports = router;