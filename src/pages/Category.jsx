// NPM packages
import { useParams, Link } from "react-router-dom";

// Project file
import categories from "data/categories.json";

export default function Category() {
  const { categoryId } = useParams();

  // Properties
  const category = categories.find((item) => item.categoryId === categoryId);

  // Safeguard
  if (category === undefined) return <Link to="/">Menu not found go home</Link>;

  return (
    <div id="categoy">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}
