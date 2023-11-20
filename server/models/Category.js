import mongoose from "mongoose";

const categotySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Categoty = mongoose.model("Categoty", categotySchema);

export default Categoty;
