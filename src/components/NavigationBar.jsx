// NPM packages
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <Link to="/">(👩‍🌾 Green farm bar & grill)</Link>
      <Link to="menu/dishes">Dishes</Link>
      <Link to="menu/desert">Desert</Link>
      <Link to="menu/drinks">Drinks</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
