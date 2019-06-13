const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


// const connectDB = async () => {
//     console.log("HEREERERERERERERERER")
//     try {
//         await mongoose.connect(db);
//         console.log("Connected to MongoDB");
//     } catch(err) {
//         console.error(err.message);
//         //exit process without failure
//         process.exit(1);
//     }

// }

const connectDB = () => {
  mongoose.connect(db, {
    useNewUrlParser: true
  });
  console.log("Connected to MongoDB");
  var connection = mongoose.connection;
  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', function callback () {
    // console.log("");
  });
}

module.exports = connectDB;

    