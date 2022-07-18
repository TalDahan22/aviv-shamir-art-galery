import mongoose from "mongoose";
const Schema = mongoose.Schema;

const product = new Schema({
  
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Product = mongoose.model("Product", product);

export default Product;
