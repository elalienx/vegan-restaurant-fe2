// NPM packages
import { Link } from "react-router-dom";

// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function ProductCard({ item }) {
  const { productId, description, imageThumb, name } = item;

  // Properties
  let imageURL = "";

  // Safeguard
  try {
    imageURL = require(`../assets/images/categories/${imageThumb}`);
  } catch {
    imageURL = FatalErrorImage;
  }

  return (
    <Link to={`/product/${productId}`}>
      <img src={imageURL} alt="Thumbnail of the product" />
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
  );
}
