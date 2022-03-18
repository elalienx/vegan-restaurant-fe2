// Project files
import HeroImage from "assets/images/home-hero.jpg";
import CategoryItem from "components/CategoryItem";
import categories from "data/categories.json";

export default function Home() {
  // Components
  const Categories = categories.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));

  return (
    <div id="home">
      <header className="hero">
        <h1>Home</h1>
      </header>
      <section className="container categories">{Categories}</section>
    </div>
  );
}
