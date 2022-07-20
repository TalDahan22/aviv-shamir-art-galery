import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const handler = async (req, res) => {
 
  console.log("req.method", req.method);
  if (req.method === "POST") {
    const { category, price, image } = req.body;
    if (category && price && image) {
      try {
        const product = new Product({
          category,
          price,
          image,
        });
        // Create new product
        const productcreated = await product.save();
        res.status(200).send(productcreated);
        console.log(productcreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { id } = req.query;

    Product.findById(id)
      .then((product) => res.send(product))
      .catch((e) => res.send("you got an ERROR"));
      
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    Product.findByIdAndRemove(id)
      .then((product) => res.send(product))
      .catch((e) => res.send("you got an ERROR"));
  } else if (req.method === "PATCH") {
    const { id } = req.query;
    Product.findByIdAndUpdate(id, req.body)
      .then((products) => res.send(products))
      .catch((e) => res.send("you got an ERROR"));
  } else {
    res.status(422).send("req_method_not_supported");
  }
};
export default connectDB(handler);
