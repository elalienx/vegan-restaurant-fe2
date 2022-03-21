// NPM packages
import { Link } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";

export default function ItemProduct({ item }) {
  const { id, alt, descriptionShort, imageThumbURL, name } = item;

  return (
    <Link className="item-product" to={`/product/${id}`}>
      <ImageAsset src={`products/${imageThumbURL}`} alt={alt} />
      <div className="content">
        <h3>{name}</h3>
        <p>{descriptionShort}</p>
      </div>
    </Link>
  );
}
