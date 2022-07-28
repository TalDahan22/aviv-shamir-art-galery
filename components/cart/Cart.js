import { Drawer } from "@mui/material";
import { CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import styles from "../../styles/Cart.module.css";
import Card from "@mui/material/Card";
import { useContext } from "react";
import ProductContext from "../../pages/context/ProductContext";
import clientUser from "../../pages/api/clientUser";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import Modal from "../modal/Modal";
function Cart({ showDrawer, setShowDrawer }) {
  const { cartArray, removeProduct} = useContext(ProductContext);
  console.log(cartArray);

  // {
  //   products.filter((product) => product._id === id);
  // }

  function addOrder() {
   console.log('clientUser',clientUser);
    const newOrder = {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        products: cartArray,
        client: clientUser,
        date: new Date(),
      }),
    };

    fetch("api/postorder", newOrder, clientUser)
      .then((res) => res.json())
      .then((orderFromDB) => console.log("orderFromDB:", orderFromDB));
  }

  return (
    <Drawer
      anchor="left"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
    >
      <Grid
        aria-label="cart"
        container
        justifyContent={"center"}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
       <button onClick={() =>addOrder()}>ADD ORDER
        </button>
       <Modal/>
      
     
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
           <AddRoundedIcon>
            
              onClick={() => {
                updateCart(product._id);
              }}
            
              add to cart
            </AddRoundedIcon>
            <RemoveRoundedIcon
              onClick={() => {
                removeProduct(product._id);
              }}
            >
              Remove from cart
            </RemoveRoundedIcon>
          </Card>
        ))}
      </Grid>
    </Drawer>
  );
}

export default Cart;
