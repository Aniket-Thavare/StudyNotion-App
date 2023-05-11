const mongoose = require("mongoose");

const RatingAndReviews = new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User",
   },
   rating:{
    type:Number,
    required:true,
   },
   reviews:{
    type:String,
    required:true,
   }
});


module.exports = mongoose.model("RatingAndReview", RatingAndReviews);