// NPM packages
import { Link } from "react-router-dom";

// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function ErrorMessage() {
  return (
    <div className="error-message">
      <img src={FatalErrorImage} />
      <p>
        We are sorry, the menu category or specic meal was not found. Please go
        back to the homepage to choose a new menu option.
      </p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
