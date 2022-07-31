import { Drawer } from "@mui/material";
import { CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import styles from "../../styles/Cart.module.css";
import Card from "@mui/material/Card";
import { useContext, useState } from "react";
import ProductContext from "../../pages/context/ProductContext";
import clientUser from "../../pages/api/clientUser";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Modal from "../modal/Modal";
import client from "../../models/client";
import Form from "../form/Form";
function Cart({ showDrawer, setShowDrawer }) {
  const { cartArray, removeProduct } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  console.log(cartArray, "cart");
  console.log("client", clientUser);

  function addOrder() {
    console.log("showmodal", showModal);
    console.log("clientUser", clientUser);
    const newOrder = {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        products: cartArray,
        client: {},
        date: new Date(),
      }),
    };
    // fetch("api/postorder", newOrder, clientUser)
    //   .then((res) => res.json())
    //   .then((orderFromDB) => console.log("orderFromDB:", orderFromDB));
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
        <button onClick={() => setShowModal(true)}>ADD ORDER</button>
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <Form addOrder={addOrder} />
          </Modal>
        )}

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
              onClick=
              {() => {
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
