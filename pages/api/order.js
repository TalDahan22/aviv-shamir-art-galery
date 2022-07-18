import connectDB from "../../middleware/mongodb";
import Order from "../../models/order";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { products, client, date } = req.body;
    if (products && client && date) {
      try {
        const order = new Order({
          products,
          client,
          date,
        });
        const ordercreated = await order.save();
        res.status(200).send(ordercreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    Order.find()
      .then((orders) => res.send(orders))
      .catch((e) => res.send("you got an ERROR"));
  } else if (req.method === "DELETE") {
    const { orderId } = req.params;

    Order.findByIdAndRemove(orderId)
      .then((order) => res.send(order))
      .catch((e) => res.send("you got an ERROR"));
  } else if (req.method === "PATCH") {
    const { orderId } = req.params;
    Order.findByIdAndUpdate(orderId, req.body)
      .then((orders) => res.send(orders))
      .catch((e) => res.send("you got an ERROR"));
  } else {
    res.status(422).send("data_incomplete");
  }
};
export default connectDB(handler);
