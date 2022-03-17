// NPM packages
import { Link } from "react-router-dom";

// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function CategoryCard({ item }) {
  const { categoryId, description, imageThumb, name } = item;

  // Properties
  let imageURL = "";

  // Safeguard
  try {
    imageURL = require(`../assets/images/categories/${imageThumb}`);
  } catch {
    imageURL = FatalErrorImage;
  }

  return (
    <article>
      <img src={imageURL} alt="Thumbnail of the category" />
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/menu/${categoryId}`}>View {name}</Link>
      </div>
    </article>
  );
}
