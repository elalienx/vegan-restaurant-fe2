// NPM packages
import { Link } from "react-router-dom";

// Project files
import Image from "components/Image";

export default function CategoryCard({ item }) {
  const { categoryId, description, imageThumbURL, name } = item;

  return (
    <article>
      <Image
        src={`categories/${imageThumbURL}`}
        alt="Thumbnail of the category"
      />
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/menu/${categoryId}`}>View {name}</Link>
      </div>
    </article>
  );
}
