// NPM packages
import { Link } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";

export default function ProductItem({ item }) {
  const { alt, productId, descriptionShort, imageThumbURL, name } = item;

  return (
    <Link className="product-item" to={`/product/${productId}`}>
      <ImageAsset src={`products/${imageThumbURL}`} alt={alt} />
      <div className="content">
        <h3>{name}</h3>
        <p>{descriptionShort}</p>
      </div>
    </Link>
  );
}
