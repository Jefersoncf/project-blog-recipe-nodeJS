const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const connectDB = require('./server/models/database');

const app = express();
dotenv.config({path: '.env'});
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('RecipeBlogSecure'));
app.use(session({
  secret: 'RecipeBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './include/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/blogRoutes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log('listening on! '+PORT);
});

