// NPM packages
import { useParams } from "react-router-dom";

// Project file
import ErrorMessage from "components/ErrorMessage";
import Image from "components/Image";
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

  // Safeguard
  if (category === undefined) return <ErrorMessage />;

  // Components
  const Products = filteredProducts.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  return (
    <div id="categoy">
      <Image
        src={`categories/${category.imageFullURL}`}
        alt="The category image in full size"
      />
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <section className="products">{Products}</section>
    </div>
  );
}
