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

    res.render('index', {title: 'HomePage', categories});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}

exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render('categories', {title: 'Categories', categories});
  } catch (error) {
    res.status(500).send({message: error.message || 'Error processing'});
  }
}


// async function insertCategoryData(){
//   try {
//     await Category.insertMany(
//       [
//         {
//           'name': 'Thai',
//           'image': 'thai-food.jpg'
//         },
//         {
//           'name': 'American',
//           'image': 'american-food.jpg'
//         },
//         {
//           'name': 'Chinese',
//           'image': 'chinese-food.jpg'
//         },
//         {
//           'name': 'Indian',
//           'image': 'indian-food.jpg'
//         },
//         {
//           'name': 'Spanish',
//           'image': 'spanish-food.jpg'
//         },
//         {
//           'name': 'Mexican',
//           'image': 'mexican-food.jpg'
//         }
//       ]);
//   }
//   catch(err){
//     console.log('error'+err);
//   }
// }
// insertCategoryData();


// async function insertRecipeData(){
//   try {
//     await Recipe.insertMany(
//       [
//         { 
//           "name": "Recipe Name Goes Here",
//           "description": `Recipe Description Goes Here`,
//           "email": "recipeemail@raddy.co.uk",
//           "ingredients": [
//             "1 level teaspoon baking powder",
//             "1 level teaspoon cayenne pepper",
//             "1 level teaspoon hot smoked paprika",
//           ],
//           "category": "American", 
//           "image": "southern-friend-chicken.jpg"
//         },
//         { 
//           "name": "Recipe Name Goes Here",
//           "description": `Recipe Description Goes Here`,
//           "email": "recipeemail@raddy.co.uk",
//           "ingredients": [
//             "1 level teaspoon baking powder",
//             "1 level teaspoon cayenne pepper",
//             "1 level teaspoon hot smoked paprika",
//           ],
//           "category": "American", 
//           "image": "southern-friend-chicken.jpg"
//         },
//       ]
//     );
//   }
//   catch(err){
//     console.log('error'+err);
//   }
// }
// insertRecipeData();