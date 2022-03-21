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
  console.log("id", id);

  // Properties
  const category = categories.find((item) => item.id === id);
  console.log("category", category);
  console.log("products", products);
  const filteredProducts = products.filter((item) => item.categoryId === id);
  console.log("filteredProducts", filteredProducts);

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
          src={`categories/${category.imageURL}`}
          alt={category.alt}
        />
      </header>
      <section className="container">
        <h2>Our top {category.name}</h2>
        <p>{category.description}</p>
        <section className="products">{Products}</section>
      </section>
    </div>
  );
}
