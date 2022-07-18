import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

import * as dotenv from "dotenv";

const ProductSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

dotenv.config({ path: "../.env.local" });

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const loopFiles = async (dir) => {
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
  );
  try {
    const files = await fs.promises.readdir(dir);

    for (const file of files) {
      const p = path.join(dir, file);
      const stat = await fs.promises.stat(p);

      if (stat.isFile()) {
        cloudinary.uploader.upload(p, async function (error, result) {
          console.log("secure_url", result.secure_url);

          const image = result.secure_url;
          const product = new Product({
            category: "62cdb3e241ef06953f0c9a65",
            price: 55,
            image,
          });
          // Create new product
          const productcreated = await product.save();
        });

        // console.log("'%s'  file.", file);
      } else if (stat.isDirectory()) {
        console.log("'%s' directory.");
      }
    }
  } catch (e) {
    console.error(e);
  }
};

loopFiles("images");
