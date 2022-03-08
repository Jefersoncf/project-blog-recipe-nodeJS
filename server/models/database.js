const mongoose = require('mongoose');

require('./Category');
require('./Recipe');

// mongoose.connect(process.env.CONECTION_DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected');
// });

const connectDB = async () => {
  try {
    const db = mongoose.connect(process.env.CONECTION_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected db');
  }catch(e) {
    console.log(e);
    process.exit(1);
  }
}
module.exports = connectDB;