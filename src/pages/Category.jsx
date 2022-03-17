// NPM packages
import { useParams } from "react-router-dom";

// Project file
import categories from "data/categories.json";
import ErrorMessage from "components/ErrorMessage";

export default function Category() {
  const { categoryId } = useParams();

  // Properties
  const category = categories.find((item) => item.categoryId === categoryId);

  // Safeguard
  if (category === undefined) return <ErrorMessage />;

  return (
    <div id="categoy">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}
