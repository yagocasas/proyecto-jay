import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <h2>
          PROYECTO CREADO POR: <span className="jay">JAY</span>
        </h2>
        <div className="gits">
          <a href="https://github.com/Jeronimofe">JERO</a>
          <a href="https://github.com/DarkoGL">ADOLFO</a>
          <a href="https://github.com/yagocasas">YAGO</a>
        </div>
        <p className="copy">Todos los derechos reservados&copy; XD</p>
      </footer>
    </div>
  );
};

export default Footer;
