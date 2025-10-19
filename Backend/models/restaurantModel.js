import mongoose from "mongoose";

export const ratingSchema = new mongoose.Schema({
  score: { type: Number, min: 1, max: 5 },
  count: { type: Number, min: 0 },
}, { _id: false });

const locationSchema = new mongoose.Schema({
  address: { type: String, required: true },
  hours: { type: String, required: true },
  rating: { type: ratingSchema, required: true }
}, { _id: false });

const restaurantSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  image: { type: String },
  categories: { type: [String], default: [] },
  locations: { type: [locationSchema], default: [] }
}, { timestamps: true });


const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
