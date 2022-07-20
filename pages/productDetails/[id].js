import { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import { CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import "../../styles/Product.module.css";
import { useRouter } from "next/router";
import ProductContext from "../context/ProductContext";

const ProductDetails = () => {

  const { updateCart } = useContext(ProductContext);
  const [showProduct, setShowProduct] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id)
      fetch(`/api/product/${id}`)
        .then((res) => res.json())
        .then((product) => {
          console.log(id);
          setShowProduct(product);
        });
  }, [id]);
  return (
    <Grid container justifyContent={"center"}>
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader title={showProduct.title} />
        <CardMedia
          image={showProduct.image}
          alt="pic"
          component="img"
          height="500"
        ></CardMedia>
        <CardContent>
          <div className="product-info">
            <h5>{showProduct.title}</h5>
            <h6>{showProduct.price}</h6>
            <h6>{showProduct.description}</h6>
            <h6>{showProduct.category}</h6>
          </div>
        </CardContent>
        <button
          onClick={() => {
            updateCart(showProduct);
          }}
        >
          add to cart
        </button>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
