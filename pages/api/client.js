import connectDB from "../../middleware/mongodb";
import bcrypt from "bcrypt";
import Client from "../../models/client";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Check if name, email or password is provided
    const { name, email, password, creditCard } = req.body;
    if (name && email && password && creditCard) {
      try {
        // Hash password to store it in DB
        const passwordhash = await bcrypt.hash(password, 10);
        const client = new Client({
          name,
          email,
          password: passwordhash,
          creditCard,
        });
        // Create new user
        const clientcreated = await client.save();
        res.status(200).send(clientcreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "PATCH") {
    const { clientId } = req.query;
    console.log("igia", clientId);
    res.send("");
    // Client.findByIdAndUpdate(clientId, req.body)
    //   .then((clients) => res.send(clients))
    //   .catch((e) => res.send("you got an ERROR"));
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
