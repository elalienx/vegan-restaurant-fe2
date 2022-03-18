// NPM packages
import { useParams } from "react-router-dom";

// Project file
import ImageAsset from "components/ImageAsset";
import ErrorMessage from "components/ErrorMessage";
import ProductItem from "components/ProductItem";
import categories from "data/categories.json";
import products from "data/products.json";

export default function Category() {
  const { id } = useParams();

  // Properties
  const category = categories.find((item) => item.id === id);
  console.log("category", category);
  const filteredProducts = products.filter((item) => item.id === id);

  // Safeguard
  if (category === undefined) return <ErrorMessage />;

  // Components
  const Products = filteredProducts.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  return (
    <div id="categoy">
      <header className="hero">
        <div className="content">
          <h1>{category.name}</h1>
        </div>
        <ImageAsset
          src={`categories/${category.imageFullURL}`}
          alt={category.alt}
        />
      </header>
      <section className="container">
        <h2>Our top choices</h2>
        <p>{category.description}</p>
        <section className="products">{Products}</section>
      </section>
    </div>
  );
}
