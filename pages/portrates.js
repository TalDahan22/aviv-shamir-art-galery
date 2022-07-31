import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Upload from "../components/uploadPic/Upload";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import styles from "../styles/portrates.module.css";
function Portrates() {
  const { cartArray } = useContext(ProductContext);

  return (
    <>
      <h1>get your own portrate </h1>
      <div className={styles.App}>
        <Upload />

        <button>choose background color</button>
        <button>choose text (optional)</button>
        <button
          onClick={() => {
            updateCart(product._id);
          }}
        >
          add to cart
        </button>
      </div>
    </>
  );
}

export default Portrates;
