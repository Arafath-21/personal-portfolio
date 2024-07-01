import React from 'react';
import avatar from '../../assets/avatar.jpg';
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
import './about.scss';

const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-8 col-md-8">
              <div className="h1 fw-bold text-center">About Me</div>
              <div className='wrapper-desc'>
                Proficient in <b>Visual COBOL mainframe development</b> for over <b>2.8 years</b>, but passionate about <b>web technology</b>.
                <br />
                Extensive hands-on experience with <b>DB2 databases</b>, including design and optimization.
                <br />
                Skilled in version control using <b>GitLab</b> for efficient code management.
                <br />
                Collaborated effectively with cross-functional teams to deliver high-quality solutions.
                <br />
                Strong <b>problem-solving</b> abilities in troubleshooting complex mainframe issues.
              </div>
              <br />
              <div className="wrapper-desc">
                I'm always eager to take on new challenges and contribute to innovative projects. If you're looking for a developer who is not only skilled but also passionate about creating exceptional digital experiences, I'd love to connect. Feel free to explore my projects and get in touch for potential collaborations!
              </div>
              <div className="ic-div">
                <a href="https://github.com/Arafath-21" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github"></i></a>
                <a href="www.linkedin.com/in/arafathyas" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:arafathyas21@gmail.com" className="icons"><i className="fa-solid fa-envelope"></i></a>
                <a href="tel:+91 8428435883" className="icons"><i className="fa-solid fa-phone"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 fesc">
              <div className="wrapper">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="h1 text-center fw-bold skills">My Skills</div>
              <div className="skill-icon">
                <div className="ico text-center fw-bold"><img className='pb-2' src={html} alt="" />HTML</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={css} alt="" />CSS</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={js} alt="" />Javascript</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={react} alt="" />React</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={sass} alt="" />Sass</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={bootstrap} alt="" />Bootstrap</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={nodejs} alt="" />Nodejs</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={express} alt="" />Express</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={mongodb} alt="" />Mongodb</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={postman} alt="" />Postman</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={git} alt="" />Git</div>
                <div className="ico text-center fw-bold"><img className='pb-2' src={netlify} alt="" />Netlify</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
