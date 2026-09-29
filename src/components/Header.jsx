import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          🎬 Movie Explorer
        </Link>

        <nav>
          <Link to="/">
            Home
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;