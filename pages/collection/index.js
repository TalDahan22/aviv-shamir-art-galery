import React, { useContext } from "react";
import Product from "../../components/product/Product";
import styles from "../../styles/collection.module.css";
import ProductContext from "../context/ProductContext";

const Collections = () => {
  const { products } = useContext(ProductContext);
  console.log("products", products);

  return (
    <section className={styles.collection}>
      {products?.map((product) => {
        console.log("product._id", product._id);
        return (
          <Product
            key={product._id}
            id={product._id}
            category={product.category}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </section>
  );
};

export default Collections;
