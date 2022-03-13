//SCRIPT DE DANCO DE DADOS

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



// SCRIPTS RECIPE DATA

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
  //         { 
  //           "name": "Rolinhos Thai",
  //           "desc": `Prepare o arroz como de costume, mas sem cozinhar por completo. À parte, 
  //             refogue a cebola no óleo. Junte a carne moída, o molho inglês, sal e pimenta-do-reino 
  //             e misture. Em seguida, adicione a salsa, refogue mais um pouco e retire do fogo. 
  //             Leve ao fogo uma panela grande com água para ferver. Desfolhe o repolho sem cortar as 
  //             folhas e mergullhe-as na água fervente para que amoleçam. Retire e coloque num escorredor. 
  //             Sobre uma tábua, abra uma folha por vez e, com uma colher, faça um montinho da mistura 
  //             de arroz com carne moída e enrole, dobrando as pontas para dentro. Se necessário, 
  //             use por dentro pedaços de outras folhas para cobrir eventuais furos e fechar melhor 
  //             os rolinhos. Arrume-os lado a lado no fundo de uma panela grande. Corte as cenouras e 
  //             abobrinhas em rodelas grossas e as batatas em pedaços e preencha os vazios. Dissolva o 
  //             tablete de caldo de galinha na água da fervura do repolho e despeje na panela até quase 
  //             cobrir os rolinhos. Deixe cozinhar bem até que as batatas estejam bem moles.`,
  //           "email": "rolinhos_thai@email.com",
  //           "ingredients": [
  //             "2 xícaras (chá) de arroz lavado e escorrido",
  //             "1 cebola picada",
  //             "3 colheres (sopa) de óleo",
  //             "300 g de carne de porco moída",
  //             "1/2 xícara (chá) de salsa picada",
  //             "1 repolho grande",
  //             "2 cenouras raspadas",
  //             "4 abobrinhas médias",
  //             "4 batatas médias descascadas",
  //             "3 ovos",
  //             "Suco de 2 limões",
  //           ],
  //           "category": "Thai", 
  //           "image": "rolinhos-thai.jpg"
  //         },

  //         { 
  //           "name": "Frango ao Curry",
  //           "desc": `Em uma frigideira, coloque o azeite e adicione os cubos de frango. 
  //             Refogue por alguns minutos até que fique dourado. Junte a cebola e, em seguida, 
  //             o alho. Acrescente o curry. Misture tudo e deixe cozinhar por alguns minutos. 
  //             Despeje o leite de coco e deixe cozinhar em fogo médio até engrossar. 
  //             Sirva quente.`,
  //           "email": "frango_curry@email.com",
  //           "ingredients": [
  //             "3 filés de frango picados em cubos",
  //             "2 cebolas picadas",
  //             "2 alhos picados",
  //             "1/2 colher de azeite",
  //             "2 colheres de café de curry",
  //             "1 vidro de leite de coco",
  //           ],
  //           "category": "Thai", 
  //           "image": "frango-curry.jpg"
  //         },
  //         { 
  //           "name": "Frango ao Curry",
  //           "desc": `Coloque o macarrão em uma tigela grande e adicione água fervente para 
  //             cobrir. Deixe descansar até que o macarrão amoleça.Escorra, regue com uma colher 
  //             de sopa de óleo de amendoim para não grudar e reserve.Enquanto isso, ponha pasta 
  //             de tamarindo, molho de peixe, mel e vinagre em uma panela pequena, em fogo 
  //             médio/baixo, até ferver levemente. Adicione a pimenta vermelha e reserve. 
  //             Coloque as 3 colheres do óleo de amendoim restantes em uma frigideira grande 
  //             em fogo médio/alto. Quando o óleo começar a se mexer, adicione a cebolinha e 
  //             o alho e cozinhe por um minuto. Acrescente os ovos e quando começarem a endurecer,
  //             mexa bem até deixar homogêneo. Ponha o repolho e os brotos de feijão e 
  //             continue a cozinhar até o repolho começar a murchar. Em seguida, acrescente 
  //             os camarões ou tofu (ou ambos). Quando o camarão começar a pegar cor e o tofu 
  //             a escurecer, transfira o macarrão para a panela, junto do molho. Misture tudo e 
  //             cubra com o molho de pasta de tamarindo. Espere a massa aquecer e sirva-a 
  //             imediatamente, polvilhando cada prato com amendoins e decorando com fatias 
  //             de limão e coentro.`,
  //           "email": "pad_thai@email.com",
  //           "ingredients": [
  //             "120g de macarrão de arroz",
  //             "1/4 xícara de óleo de amendoim",
  //             "1/4 xícara de pasta de tamarindo",
  //             "1/4 xícara de molho de peixe (nam pla)",
  //             "1/3 xícara de mel",
  //             "2 colheres (sopa) de vinagre",
  //             "1/2 colher (sopa) de pimenta vermelha",
  //             "1/4 xícara de cebolinha picada",
  //             "1 dente de alho picado",
  //             "2 ovos",
  //             "1 repolho picado",
  //             "1 xícara de broto de feijão",
  //             "230g de camarões descascados ou tofu, ou uma combinação dos dois",
  //             "1/2 xícara de amendoim torrado picado",
  //             "1/4 xícara de coentro fresco picado",
  //             "2 limões, cortados em quatro",
  //           ],
  //           "category": "Thai", 
  //           "image": "pad-thai.jpg"
  //         },
  //         { 
  //           "name": "Arroz com Frango e Manga",
  //           "desc": `Cozinhe o arroz conforme recomendação da embalagem. 
  //           Em uma panela larga, aqueça o azeite e frite aí o gengibre e a pimenta. 
  //           Acrescente o frango e a manga e refogue rapidamente. Junte o arroz cozido, 
  //           misture bem, prove o sal e sirva em seguida.`,
  //           "email": "arroz_frango_manga@email.com",
  //           "ingredients": [
  //             "1 xícara (chá) de arroz",
  //             "2 colheres (sopa) de Azeite",
  //             "1 colher (chá) de Gengibre Fresco picado",
  //             "1 colher (chá) de Pimenta Dedo de Moça cortadas em rodelas finas",
  //             "1 xícara (chá) de Peito de Frango Cozido desfiado",
  //             "1 1/2 xícara (chá) de Manga em cubos médios",
  //             "Sal a gosto",
  //           ],
  //           "category": "Thai", 
  //           "image": "arroz-frango-manga.jpg"
  //         },
  //         { 
  //           "name": "Ovos mexidos com Bacon",
  //           "desc": `Frite o bacon na própria gordura numa frigideira e reserve. Quebre os ovos e 
  //             os coloque em um recipiente. Acrescente a manteiga no mesmo recipiente, mas não mexa. 
  //             Coloque tudo em uma frigideira pequena ou média, em fogo médio - se as claras 
  //             começarem a ficar brancas muito rapidamente, tire a panela do fogo por um tempo. 
  //             Com uma colher de pau ou uma espátula de silicone, mexa de maneira a estourar as 
  //             gemas, mas, ainda assim, delicadamente. Concentre os movimentos no centro da 
  //             frigideira, que é o lugar mais aquecido e onde o ovo gruda mais, mas passe 
  //             ocasionalmente pelas bordas também. Adicione uma pitada de sal quando a mistura 
  //             estiver já um pouco rígida, um pouco antes de dar o ponto do ovo. Continue mexendo 
  //             até ficar na consistência que você prefere. Se você gosta dos ovos mais durinhos e 
  //             secos, deixe por mais tempo. Se preferir mais cremoso, tire do fogo mais cedo. 
  //             Sirva logo em seguida. Os ovos continuam cozinhando por um tempinho quando saem da panela.`,
  //           "email": "ovos_mexidos_bacon@email.com",
  //           "ingredients": [
  //             "1 colher de chá de manteiga",
  //             "Dois ovos",
  //             "Sal",
  //             "Bacon a gosto",
  //           ],
  //           "category": "American", 
  //           "image": "ovos-com-bacon.jpg"
  //         },
  //         { 
  //           "name": "Backed Potatoes",
  //           "desc": `Frite o bacon em sua própria gordura, até ficarem douradas. Escorra o 
  //             excesso de gordura e coloque sobre papel absorvente. Reserve. Escove e lave 
  //             bem as batatas. Embrulhe-as uma a uma em papel de alumínio. Coloque-as em uma 
  //             assadeira e leve ao forno médio pré-aquecido (180ºC) por aproximadamente 1 
  //             hora (ou até ficarem macias, ao espetar um garfo). Descubra parcialmente a 
  //             batata, fazendo um bercinho com o papel de alumínio. Dê dois cortes profundos, 
  //             formando uma cruz na batata, comprima as duas extremidades para abrir um buraco 
  //             e polvilhe meia colher (chá) de sal sobre as batatas. Tempere o creme de 
  //             leite com o sal restante, distribua sobre as batatas, polvilhe o bacon 
  //             reservado e a salsa e sirva a seguir
  //             Dicas:
  //             Se desejar variar, junte ao creme de leite
  //             - 100g de champignons em conserva, fatiados (cerca de 1 xícara de chá) e salsa picada
  //             - 4 colheres (sopa) de queijo parmesão ralado e cebolinha verde picada.
  //             `,
  //           "email": "backed_potatoes@email.com",
  //           "ingredients": [
  //             "200 g de bacon picado",
  //             "5 batatas grandes de tamanhos uniformes",
  //             "1 colher (chá) de sal",
  //             "1 lata de creme de leite",
  //             "salsa picada",
  //           ],
  //           "category": "American", 
  //           "image": "baked-potato.jpg"
  //         },
  //         { 
  //           "name": "Muffin de ovo e bacon",
  //           "desc": `Pré-aqueça o forno em 180 graus. Em uma frigideira, refogue os cubinhos de 
  //             bacon até que fiquem dourados e reserve. Corte as fatias de pão em rodelas 
  //             (dica: você pode usar a boca de um copo grande para fazer o corte). Com a ajuda 
  //             de um rolo de macarrão, amasse as rodelas de pão até que fiquem bem achatadas. 
  //             Acomode as massinhas de pão nos espaços de uma forma para muffin, apertando para 
  //             que fiquem bem firmes no fundo da forma. Leve ao forno por 4 minutos, para que deem 
  //             uma leve tostada e assim não absorvam o ovo no próximo passo. Retire do forno e reserve. 
  //             Em uma tigela, misture os ovos, o leite, o queijo ralado, a cebolinha e o bacon. 
  //             Despeje rapidamente a mistura nas forminhas de pão e deixe assar por cerca de 
  //             12 minutos. Decore com cebolinha extra e sirva ainda quentinho.`,
  //           "email": "muffin_bacon@email.com",
  //           "ingredients": [
  //             "4 ovos",
  //             "6 fatias de pão de forma",
  //             "50g de bacon em cubinhos",
  //             "50g de queijo ralado",
  //             "1/3 de xícara de leite",
  //             "Cebolinha a gosto (ou orégano)",
  //           ],
  //           "category": "American", 
  //           "image": "muffin-ovo-bacon.jpg"
  //         },
  //         { 
  //           "name": "Cupcake de banana com Nutella",
  //           "desc": `Amasse bem a banana, misturando na mesma hora o suco de limão para não escurecer. 
  //             Em outro recipiente, peneire o bicarbonato, o sal e a farinha. Junte em uma 
  //             tigela os ovos, o açúcar e o óleo e com a ajuda de um fouet bata até obter uma 
  //             mistura homogênea. Junte a baunilha e a banana amassada e siga batendo com o fouet. 
  //             Gradativamente adicione a mistura de farinha, sal e bicardonato, mexendo com uma 
  //             espátula. Distribua nas formas mais ou menos em 3/4 da forma, pois esta massa não 
  //             cresce muito. Leve ao forno preaquecido por cerca de 20 minutos. Cobertura: 
  //             Na batedeira, bata a manteiga em velocidade média até ficar cremosa. Diminua 
  //             a velocidade para juntar gradativamente o açúcar já peneirado com o cacau. 
  //             Adicione o leite e a Nutella e volte para a velocidade média. Observe a consistência, 
  //             se estiver muito duro adicione leite, se muito mole açúcar. Utilize nos cupcake já frios.`,
  //           "email": "cupcake@email.com",
  //           "ingredients": [
  //             "2 ovos",
  //             "125ml de óleo",
  //             "200g de açúcar",
  //             "150g de farinha",
  //             "2 colheres (sopa) de suco de limão",
  //             "1 colher (chá) de bicarbonato de Sódio",
  //             "1 colher (chá) de baunilha",
  //             "1/2 Colher (chá) de sal",
  //             "2 bananas nanicas",
  //             "3 colheres (sopa) de Leite",
  //             "200g de Açúcar de Confeiteiro",
  //             "120g de Manteiga",
  //             "50g de Cacau em Pó",
  //             "100g de Nutella",
  //           ],
  //           "category": "American", 
  //           "image": "cupcake.jpg"
  //         },
  //         { 
  //           "name": "Yakisoba tradicional",
  //           "desc": `Frite a carne, o frango e quando estiver quase no ponto acrescente o champignon, 
  //             a couve-flor e a cenoura. Chegando ao ponto, escorra na panela vazia e 
  //             acrescente acelga, brócolis, água, shoyu, açúcar, glutamato, o restante dos 
  //             ingredientes escorridos e mexa bem. Acrescente o óleo de gergelim quando 
  //             estiver com a cor uniforme. Acrescente um pouco de maisena para engrossar 
  //             e está pronto.`,
  //           "email": "yakisoba@email.com",
  //           "ingredients": [
  //             "80g de carne fatiada",
  //             "80g de frango xadrez",
  //             "40g de champignon",
  //             "55g de cenoura fatiada",
  //             "55g de couve-flor desfiado",
  //             "35g de brócolis desfiado",
  //             "100g de acelga em cubos",
  //             "345g de macarrão cozido e quente",
  //             "2 gotas de óleo de gergelim",
  //             "Glutamato, Shoyu e açúcar a gosto",
  //           ],
  //           "category": "Chinese", 
  //           "image": "yakisoba.jpg"
  //         },
  //         { 
  //           "name": "Frango xadrez",
  //           "desc": `Frite o frango até estar quase no ponto. Acrescente o pimentão e a cebola e 
  //           continue até atingir o ponto ideal e escorra tudo. Na panela vazia e escorrida, 
  //           acrescente meio copo americano de água, shoyu a gosto, uma pitada de glutamato 
  //           monossodio, uma pitada de açúcar, deixando sempre a maisena por último. Retorne 
  //           os ingredientes escorridos e mexa bem. Acrescente a maisena para engrossar e está 
  //           pronto. Coloque na travessa e acrescente o amendoim por cima.`,
  //           "email": "frango_xadrez@email.com",
  //           "ingredients": [
  //             "400g de peito de frango cortado em cubos",
  //             "300g de cebola cortada em cubos",
  //             "200g de pimentão (misto, verde e vermelho) cortado em cubos",
  //             "50g de amendoim frito e sem pele",
  //             "Shoyu a gosto",
  //             "Uma pitada de glutamato de monossódico",
  //             "Uma pitada açúcar",
  //             "Maisena dissolvida em de água, apenas para engrossa o molho.",
  //           ],
  //           "category": "Chinese", 
  //           "image": "frango-xadrez.jpg"
  //         },
  //         { 
  //           "name": "Lámen chinês",
  //           "desc": `Cozinhe o macarrão em água fervente por 3 a 5 minutos, até ficar al dente. 
  //           Escorra. Ferva a água, coloque a carcaça do frango (ou os tabletes de caldo de 
  //             galinha) e cozinhe em fogo baixo por 10 minutos. Retire a carcaça e tempere o 
  //             caldo com o sal, o Aji-no-moto® , a pimenta-do-reino e o óleo de gergelim. Ponha 
  //             a acelga no caldo e deixe cozinhar por 2 minutos. Tire e espere. Numa frigideira, 
  //             derreta a manteiga e refogue o cogumelo até ficar macio. Tempere com sal. Adicione 
  //             a cebolinha ao caldo. Junte o macarrão cozido. Por cima coloque os brócolis, o 
  //             shimeji e a acelga. Sirva.`,
  //           "email": "lamen_chines@email.com",
  //           "ingredients": [
  //             "250 gramas de macarrão lamén",
  //             "1 litro de água",
  //             "2 tabletes de caldo de frango (ou uma carcaça de frango)",
  //             "1 pitada de sal",
  //             "1 pitada de glutamato monossódico (ajinomoto)",
  //             "1 pitada de pimenta-do-reino",
  //             "1 colher (chá) de óleo de gergelim",
  //             "1 bulbo de acelga chinesa cortado em pedaços",
  //             "1/3 xícara de cebolinha-verde picada",
  //             "3 colheres (sopa) de manteiga",
  //             "200 gramas de cogumelo hiratake (ou shimeji)",
  //             "2 xícaras de brócolis cozido",
  //           ],
  //           "category": "Chinese", 
  //           "image": "lamen.jpg"
  //         },
  //         { 
  //           "name": "Lo Mein",
  //           "desc": `Em uma panela grande coloque a massa pronta junto com o óleo de gergelim,
  //             cozinhe até que a massa fique um pouco crocante. Reserve. Em um wok (panela) 
  //             bem quente coloque o óleo de amendoim e adicione o gengibre e o alho, dourando 
  //             durante uns 30 segundos. Adicione o brócolis e a cebola, refogando durante 3 
  //             minutos. Adicione a carne, refogando durante mais 5 minutos, ou até que fique 
  //             cozida. Adicione a mistura de massa, o molho de soja, o molho de ostras, 
  //             o açúcar mascavo e a pasta de chile. Cozinhe durante 1 minuto ou até que fique 
  //             bem quente.`,
  //           "email": "lo_mein@email.com",
  //           "ingredients": [
  //             "250 gramas de massa pronta",
  //             "450 gramas de lombo cortado em fatias pequenas",
  //             "1 colherinha de óleo de gergelim",
  //             "1 colherinha de óleo de amendoim",
  //             "1 colherinha de gengibre picado",
  //             "4 dentes de alho picados",
  //             "3 xícaras de brócolis fresco picado",
  //             "1 ½ xícara de cebola em rodelas",
  //             "3 colheres de molho de soja",
  //             "2 colheres de açúcar mascavo",
  //             "1 colher de molho de ostras",
  //             "1 colher de pasta de alho",
  //           ],
  //           "category": "Chinese", 
  //           "image": "lo-mein.jpg"
  //         },
  //       ]
  //     );
  //   }
  //   catch(err){
  //     console.log('error'+err);
  //   }
  // }
  // insertRecipeData();