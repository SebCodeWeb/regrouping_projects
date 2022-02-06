import React from 'react';

import './accueil.scss';
import Html from 'src/assets/img/html5.png';
import Css from 'src/assets/img/css3.png';
import Js from 'src/assets/img/js.png';
import Mysql from 'src/assets/img/mysql.png';
import Php from 'src/assets/img/php.png';
import ReactLogo from 'src/assets/img/react.png';
import Wp from 'src/assets/img/wp.png';
import Wpack from 'src/assets/img/webpack.png';

const Accueil = () => (
  <section className="accueil">
    <h2 className="accueil_title">Bienvenue !</h2>
    <p className="accueil_text">Ancien élève O'Clock, école en téléprésentiel formant au développement web Front-end et Back-end
    </p>
    <article className="accueil_content">
      <img src={Html} alt="logo html 5" />
      <img src={Css} alt="logo css 3" />
      <img src={Js} alt="logo javascript" />
      <img src={ReactLogo} alt="logo React Js" />
      <img src={Mysql} alt="logo my sql" />
      <img src={Php} alt="logo php" />
      <img src={Wp} alt="logo wordpress" />
      <img src={Wpack} alt="logo webpack" />
    </article>
  </section>
);
export default Accueil;
