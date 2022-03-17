// NPM packages
import { useParams } from "react-router-dom";

// Project file
import categories from "data/categories.json";
import ErrorMessage from "components/ErrorMessage";
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function Category() {
  const { categoryId } = useParams();

  // Properties
  const category = categories.find((item) => item.categoryId === categoryId);
  let imageURL = "";

  // Safeguard
  if (category === undefined) return <ErrorMessage />;
  try {
    imageURL = require(`../assets/images/categories/${category.imageFull}`);
  } catch {
    imageURL = FatalErrorImage;
  }

  return (
    <div id="categoy">
      <img src={imageURL} alt="The category image in full size" />
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}
