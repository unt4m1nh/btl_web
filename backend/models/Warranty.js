import mongoose from "mongoose";
const warrantySchema = new mongoose.Schema(
    {
    Staff: {type: String, required: true},
    status: {type: String, required: true},
    desc: {type:String, require: true},
    orderId: {type: mongoose.Schema.Types.ObjectId, ref:'order'},
    serviceId: {type: mongoose.Schema.Types.ObjectId, ref:'user'}
   },
   {
    timestamps: true,
   }
);

export default mongoose.model("warranty", warrantySchema);