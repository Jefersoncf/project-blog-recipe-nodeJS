const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

router.get('/', blogController.homepage);

router.get('/categories', blogController.exploreCategories);

router.get('/recipe/:id', blogController.exploreRecipe);

module.exports = router;