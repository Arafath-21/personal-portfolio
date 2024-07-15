import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import sass from '../../assets/sass.png';
import bootstrap from '../../assets/bootstrap.png';
import nodejs from '../../assets/nodejs.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import postman from '../../assets/postman.png';
import git from '../../assets/git.png';
import netlify from '../../assets/netlify.png';
import './skills.scss';

const Skills = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="h1 text-center fw-bold skills">My Skills</div>
            <div className="skill-icon">
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={html} alt="HTML" />
                HTML
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={css} alt="CSS" />
                CSS
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={js} alt="Javascript" />
                Javascript
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={react} alt="React" />
                React
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={sass} alt="Sass" />
                Sass
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={bootstrap} alt="Bootstrap" />
                Bootstrap
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={nodejs} alt="Nodejs" />
                Nodejs
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={express} alt="Express" />
                Express
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={mongodb} alt="Mongodb" />
                Mongodb
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={postman} alt="Postman" />
                Postman
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={git} alt="Git" />
                Git
              </div>
              <div className="ico text-center fw-bold">
                <img className="pb-2" src={netlify} alt="Netlify" />
                Netlify
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
