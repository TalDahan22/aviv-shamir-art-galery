import mongoose from "mongoose";
const Schema = mongoose.Schema;

const client = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // birthday: {
  //   type: Date,
  //   default: Date.now,
  // },

});

mongoose.models = {};

const Client = mongoose.model("Client", client);

export default Client;
