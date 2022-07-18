import mongoose from "mongoose";
const Schema = mongoose.Schema;

const creditCard = new Schema({
  creditNumber: {
    type: Number,
    required: true,
  },
  expiritionDate: {
    type: Date,
    default:Date.now,
    required: true,
  },
  cvvNumber: {
    type: Number,
    required: true,
  },
 
  personIDnumber: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

const CreditCard = mongoose.model("CreditCard", creditCard);

export default CreditCard;
