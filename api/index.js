import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://samra:samra@mern-estate.tqkf3kc.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate").then(() => {
    console.log('Connected to MongoDB!:)');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000!');
})