const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/netflix', {
    serverSelectionTimeoutMS: 1000
});

app.listen(5000,console.log("Server started"));