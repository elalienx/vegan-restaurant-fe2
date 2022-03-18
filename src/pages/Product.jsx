// NPM packages
import { useParams, useNavigate } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";
import ErrorMessage from "components/ErrorMessage";
import products from "data/products.json";
import NutritionTable from "components/NutritionTable";

export default function Product() {
  // Global state
  const { productId } = useParams();
  const navigate = useNavigate();

  // Properties
  const product = products.find((item) => item.productId === productId);

  // Safeguard
  if (product === undefined) return <ErrorMessage />;

  // Components
  const Ingredients = product.ingredients.map((item) => (
    <li key={item.id} className="ingredient">
      <span>{item.icon}</span>
      {item.name}
    </li>
  ));

  return (
    <div id="product">
      <header className="hero">
        <div className="content">
          <h1>{product.name}</h1>
        </div>
        <ImageAsset
          src={`products/${product.imageFullURL}`}
          alt={product.alt}
        />
      </header>
      <section className="container">
        <h2>About</h2>
        <p>{product.descriptionLong}</p>
        {/* Ingredients */}
        <section>
          <h2>Ingredients</h2>
          <ul>{Ingredients}</ul>
        </section>
        {/* Nutrition facts */}
        <section>
          <h2>Nutrition facts</h2>
          <NutritionTable data={product.nutritionFacts} />
        </section>
        <button className="button" onClick={() => navigate(-1)}>
          Go back to menu
        </button>
      </section>
    </div>
  );
}
