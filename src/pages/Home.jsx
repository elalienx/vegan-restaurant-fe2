// Project files
import HeroImage from "assets/images/home-hero.jpg";
import ItemCategory from "components/ItemCategory";
import categories from "data/categories.json";

export default function Home() {
  // Components
  const Categories = categories.map((item) => (
    <ItemCategory key={item.id} item={item} />
  ));

  return (
    <div id="home">
      <header className="hero">
        <div className="centered-content">
          <h1>A new culinary experience</h1>
          <span>Bringing innovative recipes to Stockholm</span>
        </div>
        <img src={HeroImage} alt={"A salad on the right side of the screen"} />
      </header>
      <section className="container">
        <h2>Our menu</h2>
        {Categories}
      </section>
    </div>
  );
}
