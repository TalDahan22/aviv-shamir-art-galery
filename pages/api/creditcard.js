import connectDB from "../../middleware/mongodb";
import CreditCard from "../../models/creditcard";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { creditNumber, expiritionDate, cvvNumber, personIDnumber } =
      req.body;
    if (creditNumber && expiritionDate && cvvNumber && personIDnumber) {
      try {
        const creditcard = new CreditCard({
          creditNumber,
          expiritionDate,
          cvvNumber,
          personIDnumber,
        });
        const creditCardcreated = await creditcard.save();
        console.log(creditCardcreated);
        res.status(200).send(creditCardcreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    if (req.method === "GET") {
      //   const { productId } = req.params;
      CreditCard.find()
        .then((creditCards) => res.send(creditCards))
        .catch((e) => res.send("you got an ERROR"));
    }

    if (req.method === "DELETE") {
      const { creditcardId } = req.params;

      Product.findByIdAndRemove(creditcardId)
        .then((creditcard) => res.send(creditcard))
        .catch((e) => res.send("you got an ERROR"));
    }

    if (req.method === "PATCH") {
      const { creditcardId } = req.params;
      CreditCard.findByIdAndUpdate(creditcardId, req.body)
        .then((creditCards) => res.send(creditCards))
        .catch((e) => res.send("you got an ERROR"));
    }

    res.status(422).send("req_method_not_supported");
  }
};
export default connectDB(handler);
