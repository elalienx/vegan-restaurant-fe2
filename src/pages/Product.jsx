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

  // Components
  const Ingredients = product.ingredients.map((item) => (
    <li key={item.id} className="ingredient">
      <span>{item.icon}</span>
      {item.name}
    </li>
  ));

  return (
    <div id="product">
      <ImageAsset
        src={`products/${product.imageFullURL}`}
        alt="Product display at full size"
      />
      <h1>{product.name}</h1>
      <p>{product.descriptionLong}</p>
      <section>
        <h2>Ingredients</h2>
        <ul>{Ingredients}</ul>
      </section>
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
    </div>
  );
}
