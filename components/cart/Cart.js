import { Drawer } from "@mui/material";
import { CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import styles from "../../styles/Cart.module.css";
import Card from "@mui/material/Card";
import { useContext } from "react";
import ProductContext from "../../pages/context/ProductContext";

function Cart({ showDrawer, setShowDrawer }) {
  const { cartArray } = useContext(ProductContext);
  console.log(cartArray);

  // {
  //   products.filter((product) => product._id === id);
  // }
  return (
    <Drawer
      anchor="left"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
    >
      <Grid aria-label="cart" container justifyContent={"center"}>
        {cartArray.map((product) => (
          <Card key={product._id} sx={{ maxWidth: 360 }}>
            <CardMedia
              image={product.image}
              alt="pic"
              component="img"
              height="500"
            ></CardMedia>
            <CardContent>
              <div className="product-info">
                <h6>{product.price}</h6>
                <h6>{product.category}</h6>
              </div>
            </CardContent>
            <button
              onClick={() => {
                updateCart(product._id);
              }}
            >
              add to cart
            </button>
          </Card>
        ))}
      </Grid>
    </Drawer>
  );
}

export default Cart;
