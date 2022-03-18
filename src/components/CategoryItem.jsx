// NPM packages
import { Link } from "react-router-dom";

// Project files
import ImageAsset from "components/ImageAsset";

export default function CategoryItem({ item }) {
  const { id, alt, description, imageThumbURL, name } = item;

  return (
    <article className="category-item">
      <ImageAsset src={`categories/${imageThumbURL}`} alt={alt} />
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link className="button" to={`/menu/${id}`}>
          View {name}
        </Link>
      </div>
    </article>
  );
}
