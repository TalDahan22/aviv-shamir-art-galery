import { Logger } from "sass";
import connectDB from "../../middleware/mongodb";
import Category from "../../models/category";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const json = JSON.parse(req.body);
    const { categoryId } = json;
    if (categoryId) {
      try {
        // const category = new Category({
        //   title,
        // });
        // Create new category
        const categorycreated = await Category.find()
          .where("title")
          .equals(categoryId);
        console.log("test", categorycreated);
        res.status(200).send(categorycreated[0]._id);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    Category.find()
      .then((categories) => res.send(categories))
      .catch((e) => res.send("you got an ERROR"));
  } else if (req.method === "DELETE") {
    const { categoryId } = req.params;

    Category.findByIdAndRemove(categoryId)
      .then((category) => res.send(category))
      .catch((e) => res.send("you got an ERROR"));
  } else if (req.method === "PATCH") {
    const { categoryId } = req.params;
    Category.findByIdAndUpdate(categoryId, req.body)
      .then((categories) => res.send(categories))
      .catch((e) => res.send("you got an ERROR"));
  } else {
    res.status(422).send("req_method_not_supported");
  }
};
export default connectDB(handler);
