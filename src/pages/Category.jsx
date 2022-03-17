// NPM packages
import { useParams } from "react-router-dom";

// Project file
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";
import ErrorMessage from "components/ErrorMessage";
import ProductCard from "components/ProductCard";
import categories from "data/categories.json";
import products from "data/products.json";

export default function Category() {
  const { categoryId } = useParams();

  // Properties
  const category = categories.find((item) => item.categoryId === categoryId);
  const filteredProducts = products.filter(
    (item) => item.categoryId === categoryId
  );
  let imageURL = "";

  // Safeguard
  if (category === undefined) return <ErrorMessage />;
  try {
    imageURL = require(`../assets/images/categories/${category.imageFullURL}`);
  } catch {
    imageURL = FatalErrorImage;
  }

  // Components
  const Products = filteredProducts.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  return (
    <div id="categoy">
      {/* <img src={imageURL} alt="The category image in full size" /> */}
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <section className="products">{Products}</section>
    </div>
  );
}
