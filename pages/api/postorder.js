import connectDB from "../../middleware/mongodb"
import Order from "../../models/order"
import client from "../../models/client";
import clientUser from "./clientUser";
const postOrderToDB  = async (req, res) => {
if (req.method === "POST"){
    
    const {products, client, date}= req.body;
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
}else{
    res.status(422).send("method not supported");
}
}
export default connectDB(postOrderToDB);