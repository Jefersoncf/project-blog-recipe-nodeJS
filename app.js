const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');

const connectDB = require('./server/models/database');

const app = express();
dotenv.config({path: '.env'});
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './include/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/blogRoutes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log('listening on! '+PORT);
});

