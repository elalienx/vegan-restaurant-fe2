// Project files
import CategoryItem from "components/CategoryItem";
import categories from "data/categories.json";

export default function Home() {
  // Components
  const Categories = categories.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));

  return (
    <div id="home">
      <h1>Home</h1>
      <section className="categories">{Categories}</section>
    </div>
  );
}
