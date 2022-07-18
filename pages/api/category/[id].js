import connectDB from "../../../middleware/mongodb";
import Category from "../../../models/category";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {title } = req.body;
    if (title) {
      try {
        const category = new Category({
          title
        });
        // Create new category
        const categorycreated = await category.save();
        res.status(200).send(categorycreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  }
  else if (req.method === "GET") {
    Category.find()
    .then((categories) => res.send(categories))
    .catch((e) => res.send("you got an ERROR"));
  }
  
  else if (req.method === "DELETE") {
    const { id } = req.query;
    
    Category.findByIdAndRemove(id)
    .then((category) => res.send(category))
    .catch((e) => res.send("you got an ERROR"));
  }


else if (req.method === "PATCH")  {
  const { id } = req.query;
  Category.findByIdAndUpdate(id, req.body)
  .then((categories) => res.send(categories))
  .catch((e) => res.send("you got an ERROR"));
}
   else {
    
    res.status(422).send("req_method_not_supported");
  }
    
  
};
export default connectDB(handler);