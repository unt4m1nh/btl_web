import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {type:String, required:true, unique: true},
    email: {type:String, require:true, unique: true},
    //fullname: {type:String, required:true},
    //phone: {type:String, required:true},
    //img: {type:String},
    password: {type:String, required:true},
    isAdmin: {type:Boolean, default: false},
    isFactory: {type:Boolean, default: false},
    isStore: {type:Boolean, default: false},
    isService: {type:Boolean, default: false},
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);