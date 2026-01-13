// Import the mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
const mongoose = require('mongoose');
require('dotenv').config();

// This function establishes a connection to the MongoDB database.
const connectDB = async () => {
  try {
    // Get MongoDB URI from environment variable
    const mongodbUri = process.env.MONGODB_URI;
    
    if (!mongodbUri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    
    // Connect to MongoDB
    const conn = await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log a confirmation message to the console.
    console.log(`MongoDB Atlas Connected Successfully`);
    console.log(`Connected to: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs during the connection attempt, log the error message.
    console.error(`MongoDB Connection Error: ${error.message}`);
    
    // Exit the Node.js process with a "failure" code (1). This is important because
    // if the app can't connect to the database, it can't function properly.
    process.exit(1);
  }
};

// Export the connectDB function so it can be imported and used in other files (like server.js).
module.exports = connectDB;
