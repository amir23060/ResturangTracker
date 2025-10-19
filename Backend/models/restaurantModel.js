import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
    score: { type: Number, min: 1, max: 5 },
    count: { type: Number, min: 0 },
}, { _id: false });

const locationsSchema = mongoose.Schema({
    
})