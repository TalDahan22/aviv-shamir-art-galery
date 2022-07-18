import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
// import { flexbox } from "@mui/system";
// import "../../styles";
import "../../styles/Product.module.css";
import { useRouter } from "next/router";

const ProductDetails = (updateCart) => {
  const [showProducts, setShowProducts] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id)
      fetch(`/api/product/${id}`)
 
        .then((res) => res.json())
        .then((product) => {
          console.log(id);
          setShowProducts(product);
        });
  }, [id]);
  return (
    <Grid container justifyContent={"center"}>
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader title={showProducts.title} />
        <CardMedia
          image={showProducts.image}
          alt="pic"
          component="img"
          height="500"
        ></CardMedia>
        <CardContent>
          <div className="product-info">
            <h5>{showProducts.title}</h5>
            <h6>{showProducts.price}</h6>
            <h6>{showProducts.description}</h6>
            <h6>{showProducts.category}</h6>
          </div>
        </CardContent>
        {/* <button
          onClick={() => {
            updateCart(id);
          }}
        >
          add to your cart
        </button> */}
      </Card>
    </Grid>
  );
};

export default ProductDetails;
