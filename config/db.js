require('dotenv').config(); 
const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB_URI_SYED

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB:", err));

module.exports = mongoose;
