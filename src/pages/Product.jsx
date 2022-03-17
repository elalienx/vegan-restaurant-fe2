// NPM packages
import { useParams } from "react-router-dom";

// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";
import ErrorMessage from "components/ErrorMessage";
import products from "data/products.json";

export default function Product() {
  const { productId } = useParams();

  // Properties
  const product = products.find((item) => item.productId === productId);
  let imageURL = "";

  // Safeguard
  if (product === undefined) return <ErrorMessage />;
  try {
    imageURL = require(`../assets/images/products/${product.imageFullURL}`);
  } catch {
    imageURL = FatalErrorImage;
  }

  return (
    <div id="product">
      <img src={imageURL} alt="Product display at full size" />
      <h1>{product.name}</h1>
      <p>{product.descriptionLong}</p>
    </div>
  );
}
