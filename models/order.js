import mongoose from "mongoose";
import Client from "./client";
import Product from "./product";
const Schema = mongoose.Schema;

const order = new Schema({
  products: Array,
  client: { type: Schema.Types.ObjectId, ref: Client },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

const Order = mongoose.model("Order", order);

export default Order;
