import React from "react";
import "../styles/footer.css";

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p>© Copyright {currentYear} Cropify</p>
    </footer>
  );
};

export default footer;
