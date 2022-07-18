import mongoose from "mongoose";
const Schema = mongoose.Schema;

const category = new Schema({
  title: {
    type: String,
    required: true,
  }})


  mongoose.models = {};

const Category = mongoose.model("Category",category);

export default Category;
