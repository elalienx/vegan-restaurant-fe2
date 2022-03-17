// NPM packages
import { useParams } from "react-router-dom";

// Project files
import ErrorMessage from "components/ErrorMessage";
import Image from "components/Image";
import products from "data/products.json";

export default function Product() {
  const { productId } = useParams();

  // Properties
  const product = products.find((item) => item.productId === productId);

  // Safeguard
  if (product === undefined) return <ErrorMessage />;

  return (
    <div id="product">
      <Image
        src={`products/${product.imageFullURL}`}
        alt="Product display at full size"
      />
      <h1>{product.name}</h1>
      <p>{product.descriptionLong}</p>
    </div>
  );
}
