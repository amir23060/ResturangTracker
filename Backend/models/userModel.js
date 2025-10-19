import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    likedRestaurants:[{type:String}],
    recentRestaurants:[{type:String}]

})
export default mongoose.model("user",userSchema)