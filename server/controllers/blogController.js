require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

/**
 * GET
 * home
 */
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);

    const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);

    const thai = await Recipe.find({'category': 'Thai'}).limit(limitNumber);
    const american = await Recipe.find({'category': 'American'}).limit(limitNumber);
    const chinese = await Recipe.find({'category': 'Chinese'}).limit(limitNumber);

    const food = { latest, thai, american, chinese};

    res.render('index', {title: 'Recipe Blog - HomePage', categories, food});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}
//GET categories
// exploreCategories
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render('categories', {title: 'Recipe Blog - Categorias', categories});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}
//GET /categories/:id
// exploreCategoriesId
exports.exploreCategoriesId = async(req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 5;
    const categoryById = await Recipe.find({'category': categoryId }).limit(limitNumber);

    res.render('categories', {title: 'Recipe Blog - Categorias', categoryById });
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}

// GET recipe/:id
exports.exploreRecipe = async(req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);

    res.render('recipe', {title: 'Recipe Blog - Recipe', recipe});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}

//POST /search
exports.searchRecipe = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await Recipe.find({$text: { $search: searchTerm, $diacriticSensitive: true }});
    
    res.render('search', {title: 'Cooking Blog - Search', recipe});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}

// GET /explore-latest
exports.exploreLatest = async(req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await Recipe.find({}).sort({ _id: -1}).limit(limitNumber);

    res.render('explore-latest', {title: 'Recipe Blog - Explore Latest', recipe});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}

// GET /explore-random
exports.exploreRandom = async(req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(random).exec();

    res.render('explore-random', {title: 'Recipe Blog - Explore Latest', recipe});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}

// GET /submit-recipe
exports.submitRecipe = async(req, res) => {
  const infoErrors = req.flash('infoErrors');
  const infoSuccessSubmit = req.flash('infoSubmit');
  res.render('submit-recipe', {title: 'Recipe Blog - Submit Recipe', infoErrors, infoSuccessSubmit});
}

// POST /submit-recipe
exports.submitRecipePost = async(req, res) => {
  try {
    let imgUpload;
    let uploadPath;
    let newImage;

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log('Nenhum arquivo foi carregado');
    }else{
      imgUpload = req.files.image;
      newImage = Date.now() + imgUpload.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImage;

      imgUpload.mv(uploadPath, function(err) {
        if (err) {
          return res.status(500).send(err);
        }
      })
    }

    const newRecipe = new Recipe({
      name: req.body.name,
      desc: req.body.desc,
      email: req.body.email,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImage
    });
    await newRecipe.save();

    req.flash('infoSubmit', 'Sua Receita foi enviada com sucesso!');
    res.redirect('/submit-recipe' );
  } catch (error) {
    // res.json(error)
    req.flash('infoErrors', error);
    res.redirect('/submit-recipe' );
  }
}

//DELETE
// async function deleteRecipe(){
//   try {
//    await Recipe.deleteOne({name: 'New Chocolate Cake2'});
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteRecipe();

//UPDATE
// async function updateRecipe(){
//   try {
//     const res = await Recipe.updateOne({name: 'New Test Recipe with image'}, {name: 'new Recipe update'});
//     res.number; // number of documents matching
//     res.nModified; // number of documents modified
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateRecipe();