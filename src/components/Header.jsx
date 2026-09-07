import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          PostApp
        </Link>

        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
