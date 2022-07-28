import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/globals.css";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import ProductContext from "./context/ProductContext";
import { useContext, useEffect, useState } from "react";
import Cart from "../components/cart/Cart";
import { SessionProvider } from "next-auth/react";
import Client from "../models/client";

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orginProducts, setOriginProducts] = useState([]);
  const [cartArray, setCartArray] = useState([]);

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

  const changeProducts = (category) => {
    setProducts(
      category === "All Collections"
        ? orginProducts
        : orginProducts.filter((product) => product.category === category)
    );
  };


  async function changeProductsHolder(value) {
    if (value === "allcollections") changeProducts("All Collections");
    else {
      const res = await fetch("/api/category", {
        body: JSON.stringify({ categoryId: value }),
        method: "POST",
      });
      const data = await res.json();
      console.log("data", data);
      changeProducts(data);
    }
  }

  function updateCart(product) {
    const existingProduct = cartArray.find(
      (cartProduct) => cartProduct._id === product._id
    );
    if (existingProduct) {
      setCartArray(
        cartArray.map((cartProduct) =>
          cartProduct._id === product._id
            ? { ...existingProduct, amount: existingProduct.amount + 1 }
            : cartProduct
        )
      );
    } else {
      setCartArray((prevCart) => [...prevCart, { ...product, amount: 1 }]);
    }
  }

  function removeProduct(id) {
    const newArray = cartArray.filter((product) => product._id !== id);
    setCartArray(newArray);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        categories,
        changeProducts,
        changeProductsHolder,
        updateCart,
        cartArray,
        setCartArray,
        removeProduct,
      
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function MyApp({ Component, pageProps, session }) {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <SessionProvider session={session}>
      <Layout>
        <div className="pageContainer">
          <div className="containerWrap">
            <Cart setShowDrawer={setShowDrawer} showDrawer={showDrawer} />

            <Header setShowDrawer={setShowDrawer}></Header>
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
