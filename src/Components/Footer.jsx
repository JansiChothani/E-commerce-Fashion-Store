import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-top">
        
       
        <div className="footer-col">
          <h2 className="footer-logo">FashionBloom</h2>
          <p>
            FashionBloom brings contemporary fashion to dynamic,
            styleconscious women and men who value elegance
            with edge.
          </p>
        </div>

        <div className="footer-col">
          <h4>SHOP</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Baby</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FashionBloom. All rights reserved. | Privacy Policy | Terms of Service
      </div>
    </footer>
  );
};

export default Footer;
