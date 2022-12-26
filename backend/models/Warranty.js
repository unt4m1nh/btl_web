import mongoose from "mongoose";
const warrantySchema = new mongoose.Schema(
    {
    Staff: {type: String, required: true},
    status: {type: String, required: true},
    orderId: {type: mongoose.Schema.Types.ObjectId, ref:'order'}
   },
   {
    timestamps: true,
   }
);

export default mongoose.model("warranty", warrantySchema);