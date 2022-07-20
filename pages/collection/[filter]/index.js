import React, { useContext, useEffect } from "react";
import Product from "../../../components/product/Product";
import styles from "../../../styles/collection.module.css";
import ProductContext from "../../context/ProductContext";
import { useRouter } from "next/router";

const FilterdCollections = () => {
  const router = useRouter();
  const { filter } = router.query;
  const { products, changeProductsHolder, setProducts } =
    useContext(ProductContext);
  console.log("filter", filter);
  console.log("products", products);

  useEffect(() => {
    changeProductsHolder(filter);
    console.log(filter);
  }, [filter]);

  return (
    <section className={styles.collection}>
      {products?.map((product) => {
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

export default FilterdCollections;
