// NPM packages
import { Link } from "react-router-dom";

// Project files
import Image from "components/Image";

export default function ProductCard({ item }) {
  const { productId, descriptionShort, imageThumbURL, name } = item;

  return (
    <Link to={`/product/${productId}`}>
      <Image src={`products/${imageThumbURL}`} alt="Thumbnail of the product" />
      <h3>{name}</h3>
      <p>{descriptionShort}</p>
    </Link>
  );
}
