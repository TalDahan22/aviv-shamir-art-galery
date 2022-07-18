import styles from "../../styles/Product.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

const Product = ({ id, price, category, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/productDetails/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="art work"
          />
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default Product;
