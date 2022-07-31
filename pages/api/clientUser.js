import connectDB from "../../middleware/mongodb";
import Client from "../../models/client";

const postClientToDB = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    try {
      const clientUser = new Client({
        name,
        email,
        adress,
      });

      const client = await clientUser.save();

      res.status(200).send(client);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("method not supported");
  }
};
export default connectDB(postClientToDB);
