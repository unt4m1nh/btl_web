import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
    productname: {type:String, required:true},
    desc:{type:String, required:true},
    image: {type:[String]},
    priceEach: {type: Number,required:true},
    warrantyTime: {type: Date,required: true},
    type: {type: String, required: true}
   }
);

export default mongoose.model("Product", productSchema);