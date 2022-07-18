import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { useContext } from "react";
import ProductContext from "../../pages/context/ProductContext";
import { get } from "mongoose";
import { useRouter } from "next/router";

const Header = () => {
  const { categories, changeProductsHolder } = useContext(ProductContext);
  const router = useRouter();
 

  return (
    <div className={styles.container}>
      <Link href="https://instagram.com/aviv_shamir_illustration?igshid=YmMyMTA2M2Y=">
      <button className={styles.btns}>
        find me on instagram!
      </button>
      </Link>
      <Link href="/">
        <button className={styles.btns}>Home</button>
      </Link>
      <div className={styles.btns}>
        <div className="collections">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              router.push(`/collection/${e.target.value}`);
            }}
          >
            <option value="allcollections">All Collections</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Link href="/portrates">
        <button className={styles.btns}>your own portrate!</button>
      </Link>
      <Link href="/cart">
        <button className={styles.btns}>cart</button>
      </Link>
      <Link href="/about">
        <button className={styles.btns}>about</button>
      </Link>
    </div>
  );
};

export default Header;
