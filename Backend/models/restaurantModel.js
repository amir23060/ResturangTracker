import mongoose from "mongoose";

export const ratingSchema = new mongoose.Schema({
  score: { type: Number, min: 1, max: 5 },
  count: { type: Number, min: 0 },
}, { _id: false });

export const locationsSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
}, { _id: false });


const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String },
  location: locationsSchema,
  rating: ratingSchema,
});


const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
