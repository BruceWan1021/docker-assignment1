const mongoose = require('mongoose');

const uri = 'mongodb://admin:secret@mongodb:27017';
const seedData = require('./seeding.json');
const Movies = require('./model/movies.js');

async function seedDatabase() { 
    try {
        await mongoose.connect(uri); 
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Something went wrong during seeding database", error);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
