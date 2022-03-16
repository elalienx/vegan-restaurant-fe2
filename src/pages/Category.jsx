// NPM packages
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();

  return (
    <div id="categoy">
      <h1>Category 🟢</h1>
      <span>@{category}@</span>
    </div>
  );
}
