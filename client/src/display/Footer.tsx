import logo from "../assets/images/logo_footer.svg";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-line" />
      <div className="footer-logo-container">
        <img src={logo} alt="logo" className="logo-footer" />
      </div>
    </div>
  );
};

export default Footer;
