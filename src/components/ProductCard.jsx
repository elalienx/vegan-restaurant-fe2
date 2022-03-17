// NPM packages
import { Link } from "react-router-dom";

// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function ProductCard({ item }) {
  const { productId, descriptionShort, imageThumbURL, name } = item;

  // Properties
  let imageURL = "";

  // Safeguard
  try {
    imageURL = require(`../assets/images/products/${imageThumbURL}`);
  } catch {
    imageURL = FatalErrorImage;
  }

  return (
    <Link to={`/product/${productId}`}>
      <img src={imageURL} alt="Thumbnail of the product" />
      <h3>{name}</h3>
      <p>{descriptionShort}</p>
    </Link>
  );
}
