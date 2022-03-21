// NPM packages
import { useParams, useNavigate } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";
import ErrorMessage from "components/ErrorMessage";
import products from "data/products.json";
import NutritionTable from "components/NutritionTable";
import ItemIngredient from "components/ItemIngredient";

export default function Product() {
  // Global state
  const { productId } = useParams();
  const navigate = useNavigate();

  // Properties
  const product = products.find((item) => item.id === productId);

  // Safeguard
  if (product === undefined) return <ErrorMessage />;

  // Components
  const Ingredients = product.ingredients.map((item) => (
    <ItemIngredient key={item.id} item={item} />
  ));

  return (
    <div id="product">
      <header className="hero">
        <h1 className="centered-content">{product.name}</h1>
        <ImageAsset src={`products/${product.imageURL}`} alt={product.alt} />
      </header>
      <section className="container">
        <h2>About {product.name}</h2>
        <p>{product.descriptionLong}</p>
        <h2>Ingredients</h2>
        <ul>{Ingredients}</ul>
        <h2>Nutrition facts</h2>
        <NutritionTable data={product.nutritionFacts} />
        <hr />
        <button className="button" onClick={() => navigate(-1)}>
          Go back to menu
        </button>
      </section>
    </div>
  );
}
