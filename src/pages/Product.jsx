// NPM packages
import { useParams } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";
import ErrorMessage from "components/ErrorMessage";
import products from "data/products.json";

export default function Product() {
  const { productId } = useParams();

  // Properties
  const product = products.find((item) => item.productId === productId);

  // Safeguard
  if (product === undefined) return <ErrorMessage />;

  return (
    <div id="product">
      <ImageAsset
        src={`products/${product.imageThumbURL}`}
        alt="Product display at full size"
      />
      <h1>{product.name}</h1>
      <p>{product.descriptionLong}</p>
    </div>
  );
}
