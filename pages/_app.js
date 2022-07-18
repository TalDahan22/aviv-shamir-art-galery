import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/globals.css";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import ProductContext from "./context/ProductContext";
import { useContext, useEffect, useState } from "react";
// import { Collection } from "mongoose";

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orginProducts, setOriginProducts] = useState([]);
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((productsData) => {
        setProducts(productsData);
        setOriginProducts(productsData);
      });
    fetch("/api/category")
      .then((res) => res.json())
      .then((category) => {
        setCategories(
          category
            .map((category) => category.title)
            .filter((value, index, array) => array.indexOf(value) === index)
        );
      });
  }, []);
  function updateCart(id) {
    const newItem = products.find((product) => product.id === id);
    setCartArray([...cartArray, newItem]);
  }

  function removeProduct(id) {
    const newArray = cartArray.filter((product) => product.id !== id);
    setCartArray(newArray);
  }

  const changeProducts = (category) => {
    setProducts(
      category === "All Collections"
        ? orginProducts
        : orginProducts.filter((product) => product.category === category)
    );
  };

  async function changeProductsHolder(value) {
    const res = await fetch("/api/category", {
      body: JSON.stringify({ categoryId: value }),
      method: "POST",
    });
    const data = await res.json();
    console.log("data", data);
    changeProducts(data);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        updateCart,
        removeProduct,
        categories,
        changeProducts,
        changeProductsHolder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="pageContainer">
        <div className="containerWrap">
          <Header></Header>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;
