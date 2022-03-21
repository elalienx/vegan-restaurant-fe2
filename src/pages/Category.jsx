// NPM packages
import { useParams } from "react-router-dom";

// Project file
import ImageAsset from "components/ImageAsset";
import ErrorMessage from "components/ErrorMessage";
import ItemProduct from "components/ItemProduct";
import categories from "data/categories.json";
import products from "data/products.json";

export default function Category() {
  const { id } = useParams();

  // Properties
  const category = categories.find((item) => item.id === id);
  const filteredProducts = products.filter((item) => item.id === id);

  // Safeguard
  if (category === undefined) return <ErrorMessage />;

  // Components
  const Products = filteredProducts.map((item) => (
    <ItemProduct key={item.id} item={item} />
  ));

  return (
    <div id="categoy">
      <header className="hero">
        <h1 className="centered-content">{category.name}</h1>
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
