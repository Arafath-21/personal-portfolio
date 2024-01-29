import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typed from 'typed.js';
import { saveAs } from 'file-saver'; // Import saveAs from file-saver
import avatar from '../../assets/coding-flatline-2715e.png';
import resume from '../../Files/ArafathCV Resume.pdf'
import './content.scss';
// import cv from ''

const Content = () => {
  const typedTextRef = useRef(null);
  const animation = useAnimation();

  const handleDownload = () => {
    // Actual filename of your resume
    const resumeFileName = 'Arafath_resume.pdf';

    // Actual path to your resume file
    const resumeFilePath = resume;

    // Trigger the download using file-saver library
    saveAs(resumeFilePath, resumeFileName);
  };
  

  useEffect(() => {
    const options = {
      strings: [
        "a Front End Developer",
        "a Back End Developer",
        "a Web Developer",
        "a Full Stack Developer",
      ],
      typeSpeed: 60,
      backSpeed: 10,
      loop: false,
      cursorChar: "",
    };
    const typed = new Typed(typedTextRef.current, options);
    animation.start({ x: 0 });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="content">
        <div className="container">
          <div className="row hero-wrapper d-flex">
            <div className="col-md-8 col-lg-8 hero-content lh-base">
              <div className="hero-name">
                Hello, I am <span className="hero-name--name2">Arafath </span>
              </div>
              <div ref={typedTextRef} className="hero-typedAnimation"></div>
              <div className="buttons">
                <div className="btn btn-outline-primary" onClick={handleDownload}>
                  Resume <i className="fa-solid fa-download px-2"></i>
                </div>
                {/* <div className="btn btn-outline-primary">
                  <a href="https://unsplash.com/" target="blank">
                    My Works <i className="fa-solid fa-person-digging px-2"></i>
                  </a>
                </div> */}
              </div>
              <div className="contact">
                <div className="email">
                  <i className="fa-solid fa-envelope px-2"></i>Email : arafathyas21@gmail.com
                </div>
                <div className="email">
                  <i className="fa-brands fa-whatsapp px-2"></i>Contact : +91 8428435883
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="col-md-4 col-lg-4 hero__col-2"
            >
              <img src={avatar} className="ill-img w-100" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
