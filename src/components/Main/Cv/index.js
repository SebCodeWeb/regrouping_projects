import React from 'react';

import './cv.scss';

const Cv = () => (
  <article className="cv">
    <p className="cv_content">
      Ancien électricien et mécanicien auto, j'ai décidé de prendre en cv mon avenir
      en me reconvertissant dans le développement web.

    </p>
    <p className="cv_content">L'école O'Clock s'est présentée comme la formule la mieux adaptée, surtout en période
      de confinement.

    </p>
    <p className="cv_content">
      5 mois d'apprentissage:
    </p>
    <p className="cv_content">
      3 mois de socle, HTML, CSS, JavaScript, PHP.
    </p>
    <p className="cv_content">
      1 mois de spécialisation: React, Symfony ou WordPress.
      Me sentant plus du côté Front, j'ai choisi React.
    </p>
    <p className="cv_content">
      1 mois d'apothéose, une mise en situation réelle.
      Méthode agile, Wireframes, maquette, et code, avec mise en production,
      avant présentation sur YouTube.
    </p>
    <p className="cv_content">
      J'ai énormément appris, moi qui avait seulement suivi le cours HTML/CSS
      d'openclassrooms et le JS de Pierre Giraud. Le support pédagogique est top,
      je recommande vivement !
    </p>
    <p className="cv_content">
      Passez dire bonjour, ils ont des cookies !

    </p>
    <h3 className="cv_title">Mon Parcours:</h3>
    <ul>
      <li>CAP - BEP - BAC Electrotechnique: 2000</li>
      <li>CAP Mécanique automobile: 2009</li>
      <li>Formation Développeur Web O'Clock: 2020</li>
    </ul>
    <h3 className="cv_title">Mon expérience:</h3>
    <ul>
      <li>Depuis 2021: Électrotechnicien TIB (je câble le système électrique des ambulances
        et camions de pompiers (SDIS)...
      </li>
      <li>De 2014 à 2021: Démonteur automobile, Atlantic Recycl'Auto.</li>
      <li>De 2010 à 2014: Conseiller de vente / Opérateur service rapide, Feu Vert.</li>
      <li> De 2000 à 2008: Polyvalent (Dépanneur électronique, agent de cvtenance,
        opérateur de production) Philips EGP (Les téléviseurs grand public).
      </li>
    </ul>
    <h3 className="cv_title">Moi:</h3>
    <p className="cv_content">
      En plus de ces métiers qui m'ont permis de développer mon esprit d'équipe,
      ma technicité, ma polyvalence et la satisfaction client,
    </p>
    <p className="cv_content">
      je m'intéresse à plusieurs choses:
    </p>
    <p className="cv_content">
      L'astrophysique, qui me prend beaucoup de temps.
    </p>
    <p className="cv_content">
      L'informatique en général, j'ai appris à me servir d'un environnement Linux (Ubuntu),
      et dernièrement je m'intéresse au C++, un langage qui m'intriguait il y a quelques années,
      et avec les bases acquises chez O'Clock, l'apprentissage est facilité. On y retrouve
      les boucles, les fonctions, les conditions, les tableaux, la POO...
    </p>
    <p className="cv_content">
      La 3D, sous 3dsmax, j'ai suivi les cours sur 3dsmax6 à Hornu en Belgique,
      chez a.s.b.l Synthésis, l'ancien CGI Trainer. Et un peu d'effets spéciaux,
      notamment avec After Effects.
    </p>
    <p className="cv_content">
      Je suis aussi motard depuis plus de 10 ans.
    </p>
    <p className="cv_content">
      Sans oublier le travail du bois. J'en suis à mon 5ème meuble construit de mes mains.
      Le DIY est un leitmotiv !
    </p>
  </article>
);
export default Cv;
