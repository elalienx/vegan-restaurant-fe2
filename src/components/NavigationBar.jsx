// NPM packages
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.png";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      <Link to="/">
        <img className="logo" src={Logo} alt="Text and a drawing of a carrot" />
      </Link>
      <div className="menu-links">
        <Link to="menu/dishes">Dishes</Link>
        <Link to="menu/deserts">Desert</Link>
        <Link to="menu/drinks">Drinks</Link>
        <Link to="contact">Contact</Link>
      </div>
    </nav>
  );
}
