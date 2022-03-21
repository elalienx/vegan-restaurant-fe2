// Project files
import OwnerImage from "assets/images/restaurant-owner.jpg";

export default function Contact() {
  return (
    <div id="contact">
      <header className="hero">
        <div className="centered-content">
          <h1>Hi, Im Otto Smich</h1>
          <span>Here is my vegan restaurant project</span>
        </div>
        <img src={OwnerImage} alt="A man with putting sugar on a lemon" />
      </header>
      <section className="container">
        <h2>Contact us</h2>
        <p>This section is comming soon...</p>
      </section>
    </div>
  );
}
