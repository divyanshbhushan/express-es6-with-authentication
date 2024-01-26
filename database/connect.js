import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/authencator')
.then(() => {
    console.log("Connected to database")
})
.catch((err) => {
    console.error(err);
})