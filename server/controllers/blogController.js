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

// exploreCategories
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render('categories', {title: 'Recipe Blog - Categories', categories});
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
//           "name": "Panquecas americanas",
//           "desc": `Em um liquidificador, bata o ovo com o óleo e o creme de leite. 
//             Acrescente a farinha de trigo e o fermento e bata até ficar homogêneo. 
//             Em uma frigideira untada com óleo, despeje porções de massa no centro, sem espalhar. 
//             Quando começar a formar furinhos na superfície, vire a panqueca e deixe dourar do outro lado. 
//             Coloque em um prato e faça o mesmo com restante da massa. Sirva.`,
//           "email": "guiadarecietamail@email.com",
//           "ingredients": [
//             "1 ovo",
//             "2 colheres (sopa) de óleo",
//             "1 caixinha de creme de leite",
//             "meia xícara (chá) de farinha de trigo",
//             "1 colher (sopa) de fermento em pó",
//           ],
//           "category": "American", 
//           "image": "panqueca.jpg"
//         },
//         { 
//           "name": "Camarão Tailandês",
//           "desc": `Descasque e corte em fatias o alho e as cebolas. 
//             Pique o jalapeño e rale o gengibre. Tire as raspas do limão e pique a 
//             erva cidreira. Descasque os camarões deixando a cabeça. Frite em óleo de 
//             coco ou de girassol bem quente e reserve. Na mesma panela frite em fogo alto 
//             o alho e a cebolinha picada. Em seguida adicione o jalapeño, os pimentões, 
//             a abobrinha em rodelas, o gengibre, a casca do limão, e o resto dos 
//             ingredientes e deixe cozinhar um pouco. Adicione o leite de coco e deixe ferver. 
//             Depois junte os camarões e cozinhe por 5 minutos. Adicione coentro picado por cima e 
//             o suco de limão.`,
//           "email": "receitadasemana@email.com",
//           "ingredients": [
//             "2 colheres (sopa) de pasta de curry",
//             "2 colheres (sopa) de suco de limão tahiti",
//             "2 folhas de limão kaffir",
//             "1 colher (sopa) de gengibre ralado",
//             "4 cebolinhas",
//             "1 jalapeño",
//             "2 dentes de alho",
//             "2 colheres (sopa) de erva cidrera",
//             "16 camarões grandes",
//             "400ml de leite de coco",
//             "1 ramo de coentro",
//             "Sal (a gosto)",
//             "2 pimentões amarelo",
//             "2 pimentões vermelho",
//             "2 abobrinhas",
//           ],
//           "category": "Thai", 
//           "image": "tailandesa.jpg"
//         },
//         { 
//           "name": "Carne Shop Suey",
//           "desc": `Aqueça o óleo e frite a carne até dourar. Adicione 1 xícara (chá) do caldo 
//             de carne, abaixe o fogo e cozinhe até a carne ficar macia. Junte a cenoura e 
//             1/2 xícara (chá) de caldo de carne e cozinhe por 5 minutos. Acrescente os brócolis 
//             e mais 1/2 xícara (chá) de caldo. Cozinhe por mais 5 minutos e adicione o molho de soja. 
//             À parte, em uma frigideira untada com manteiga, doure a farinha e junte o caldo restante. 
//             Cozinhe por 2 minutos e adicione à panela da carne. Tempere com sal e sirva.`,
//           "email": "guiadarecietamail@email.com",
//           "ingredients": [
//             "3 colheres (sopa) de óleo de gergelim",
//             "500 gramas de alcatra cortada em fatias finas",
//             "3 xícaras (chá) de caldo de carne",
//             "3 cenoura sem casca fatiadas",
//             "2 xícaras (chá) de brócolis em buquês",
//             "4 colheres (sopa) de molho de soja (shoyu)",
//             "2 colheres (sopa) de farinha de trigo",
//             "Sal a gosto",
//           ],
//           "category": "Chinese", 
//           "image": "chinese.jpg"
//         },

//         { 
//           "name": "Curry de Peixe",
//           "desc": `Pique finamente o alho e a cebola, corte as cenouras e as abobrinhas
//             em palitos bem finos e longos, e o gengibre, em lâminas bem finas. Em uma caçarola, 
//             derreta a manteiga em fogo médio e refogue o alho, a cebola e o gengibre por 3 minutos. 
//             Adicione o curry, o sal e a pimenta e deixe cozinhar por mais 2 minutos, mexendo sempre.
//             Despeje, pouco a pouco, o leite de coco e deixe ferver. Acrescente o peixe, 
//             as cenouras e as abobrinhas e deixe cozinhar em fogo baixo por 10 minutos. 
//             Em seguida, adicione os camarões e deixe por mais 5 minutos. Termine acrescentando o 
//             iogurte e acertando o sal. Sirva bem quente, com um pouco de coco ralado sobre os 
//             camarões.`,
//           "email": "guiadarecietamail@email.com",
//           "ingredients": [
//             "600 g de peixe (namorado ou cação)",
//             "200 g de camarões limpos",
//             "1 pedaço de gengibre de uns 4 cm",
//             "2 cenouras",
//             "2 abobrinhas",
//             "½ cebola",
//             "1 dente de alho",
//             "50 g de manteiga",
//             "300 ml de leite de coco",
//             "200 ml de iogurte natural",
//             "2 colheres (café) de curry",
//             "1 colher (sopa) de coco ralado",
//             "Sal e pimenta-do-reino a gosto",
//           ],
//           "category": "Indian", 
//           "image": "indiana.jpg"
//         },

//         { 
//           "name": "Arroz a Espanhola",
//           "desc": `ozinhe por 20 minutos, em seguida, mexa com um garfo. Se o arroz estiver macio, 
//             mas bastante úmido, cozinhe sem a tampa por mais 5 minutos. Se o arroz estiver seco, 
//             mas ainda não estiver no ponto, adicione meia xícara de água, tampe e continue a 
//             cozinhar por mais 5 minutos ou até que o arroz esteja pronto.`,
//           "email": "guiadarecietamail@email.com",
//           "ingredients": [
//             "2 colheres de sopa de manteiga",
//             "1 e 1/2 xícaras de arroz branco",
//             "1 cebola picada",
//             "1 pimentão verde picado",
//             "800 gramas de tomate picado",
//             "100 gramas de pimentão cortado em cubinhos",
//             "Sal e pimenta caiena a gosto",
//             "Molho de pimenta a gosto",
//           ],
//           "category": "Spanish", 
//           "image": "espanhola.jpg"
//         },

//         { 
//           "name": "Chili",
//           "desc": `Em uma panela grande, coloque azeite e refogue bem o pimentão. 
//             Adicione o alho e refogue até ficar dourado. Adicione a carne e refogue até cozinhar, 
//             mexendo sempre para não empelotar. Misture a pimenta picada e o tomate pelado. 
//             Adicione o feijão já cozido. Coloque o ketchup e tempere com o sal e a salsinha. 
//             Misture bem, tampe a panela e deixe apurar por 5 minutos. Na hora de servir, 
//             adicione o queijo ralado por cima.`,
//           "email": "guiadarecietamail@email.com",
//           "ingredients": [
//             "1 pimentão vermelho pequeno picado sem sementes",
//             "2 dente(s) de alho picados",
//             "500 grama(s) de patinho moído",
//             "490 grama(s) de feijão cozido",
//             "1 lata(s) de tomate pelado",
//             "2 colher(es) de sopa de ketchup",
//             "1 pimenta habanero chocolate sem sementes",
//             "Sal e salsinha a gosto",
//             "Azeite a gosto",
//             "Queijo prato ralado",
//           ],
//           "category": "Mexican", 
//           "image": "mexican.jpg"
//         },

//       ]
//     );
//   }
//   catch(err){
//     console.log('error'+err);
//   }
// }
// insertRecipeData();