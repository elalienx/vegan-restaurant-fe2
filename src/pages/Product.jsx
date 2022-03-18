// NPM packages
import { useParams, useNavigate } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";
import ErrorMessage from "components/ErrorMessage";
import products from "data/products.json";

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
        {/* Refactor, remove the image and use a CSS background image */}
        <ImageAsset
          src={`products/${product.imageFullURL}`}
          alt={product.alt}
        />
      </header>
      <section className="container">
        <h1>{product.name}</h1>
        <p>{product.descriptionLong}</p>
        {/* Ingredients */}
        <section>
          <h2>Ingredients</h2>
          <ul>{Ingredients}</ul>
        </section>
        {/* Nutrition facts */}
        <section>
          <h2>Nutrition facts</h2>
          <table>
            <thead>
              <tr>
                <th>Element</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories:</td>
                <td>{product.nutritionFacts.calories}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <button onClick={() => navigate(-1)}>Go back to menu</button>
      </section>
    </div>
  );
}
