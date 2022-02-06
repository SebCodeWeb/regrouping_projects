import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
// import Nav from 'src/components/Nav';
import Logo from '../../assets/img/rgb_color.png';
import Desktop from '../../assets/img/desktop.jpg';
// import Prez from '../../assets/img/accueil.jpg';

const Header = () => (
  <header className="head">
    <section className="header">
      <div className="header_flex">
        <img src={Logo} alt="Logo cercle RGB" className="img" />
        <h1 className="header_title">NeoCortexFr</h1>
      </div>
      <ul className="header_list">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/mes-projets">Projets</Link></li>
        <li><Link to="/mes-tutos">Tuto</Link></li>
        <li><Link to="/cv-bien-oui-merci">CV</Link></li>
      </ul>
    </section>
    <section className="header_img">
      {/* <img src={Prez} alt="clavier rgb" className="clavieRgb" /> */}
      <img src={Desktop} alt="bureau pc" className="deskImg" />
    </section>
  </header>
);
export default Header;
