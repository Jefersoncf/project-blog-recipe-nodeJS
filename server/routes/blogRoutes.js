const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

router.get('/', blogController.homepage);

router.get('/recipe/:id', blogController.exploreRecipe);

router.get('/categories', blogController.exploreCategories);

router.get('/categories/:id', blogController.exploreCategoriesId);

router.post('/search', blogController.searchRecipe);

router.get('/explore-latest', blogController.exploreLatest);

router.get('/explore-random', blogController.exploreRandom);



module.exports = router;