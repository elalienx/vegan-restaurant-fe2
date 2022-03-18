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
        <div className="content">
          <h1>Carrot</h1>
          <span>The best vegan restaurant in town</span>
        </div>
      </header>
      <section className="container categories">
        <h2>Our menu:</h2>
        {Categories}
      </section>
    </div>
  );
}
