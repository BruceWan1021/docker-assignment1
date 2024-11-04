const mongoose = require('mongoose');

const uri = 'mongodb://admin:secret@mongodb:27017';
const seedData = require('./seeding.json');
const Movies = require('./model/movies.js');

async function connectWithRetry() {
    while (true) {
        try {
            await mongoose.connect(uri); // 移除 useNewUrlParser 和 useUnifiedTopology
            console.log("Successfully connected to MongoDB!");
            break; // 连接成功，退出循环
        } catch (error) {
            console.error("MongoDB connection unsuccessful, retrying after 5 seconds...");
            await new Promise(resolve => setTimeout(resolve, 5000)); // 等待 5 秒再重试
        }
    }
}

async function seedDatabase() {
    try {
        await connectWithRetry(); // 使用重试机制连接 MongoDB

        await Movies.deleteMany({});
        console.log("Old data is cleared!");

        await Movies.insertMany(seedData);
        console.log("Database is seeded");

    } catch (error) {
        console.error("Something went wrong during seeding database", error);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
