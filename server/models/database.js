const mongoose = require('mongoose');

require('./Category');
require('./Recipe');

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