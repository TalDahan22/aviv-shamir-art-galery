import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import { get } from "mongoose";
import { useRouter } from "next/router";
import Login from "../login/login";
import InstagramIcon from "@mui/icons-material/Instagram";
const Header = ({ setShowDrawer }) => {
  const { categories, changeProductsHolder } = useContext(ProductContext);
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Login />
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>ALL COLLECTIONS</button>
        <div className={styles.dropdownContact}>
          <select
            className={styles.dropbtn}
            onChange={(e) => {
              router.push(`/collection/${e.target.value}`);
            }}
          >
            <option disabled>Choose Category </option>
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
      <Link href="/portrates" className={styles.dropbtn}>
        your own portrate!
      </Link>

      <a className={styles.dropbtn} onClick={() => setShowDrawer(true)}>
        cart
      </a>
      <Link className={styles.btns} href="/about">
        about
      </Link>
      <Link href="https://instagram.com/aviv_shamir_illustration?igshid=YmMyMTA2M2Y=">
        <InstagramIcon />
      </Link>
    </div>
  );
};

export default Header;
