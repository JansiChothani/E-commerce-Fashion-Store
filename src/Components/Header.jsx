<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo-img">
          <h2>
            FashionBloom
            </h2>
          {/* <img src="/Logo (3).png" alt="" /> */}
           <span>curated fashion</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Men">Men</Link>
          <Link to="/Women" >Women</Link>
          <Link to="/Kids">Kids</Link>
          <Link to="/Accessories">Accessories</Link>
        </nav>

        <div className="header-icons">
          <span>♡</span>
          <Link to="/Login">👤</Link>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
=======
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo-img">
          <h2>
            FashionBloom
            </h2>
          {/* <img src="/Logo (3).png" alt="" /> */}
           <span>curated fashion</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/category/men">Men</Link>
          <Link to="/category/women" >Women</Link>
          <Link to="/category/kids">Kids</Link>
          <Link to="/category/accessories">Accessories</Link>
        </nav>

        <div className="header-icons">
          <span>♡</span>
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
>>>>>>> 2591678f67b9df7a12de2aeaef5945965f7b1f81
