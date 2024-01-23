import React,{useEffect,useRef} from 'react'
import { motion, useAnimation } from 'framer-motion';
import avatar from '../../assets/coding-flatline-2715e.png'
import Typed from 'typed.js'
import './content.scss'

const Content = () => {

    const typedTextRef = useRef(null);
    const animation = useAnimation();

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
        cursorChar:""
      };
      const typed = new Typed(typedTextRef.current, options);
      animation.start({ x: 0 });
      return () => {
        typed.destroy();
      };
    }, []);

  return <>
      <section id="content">
        <div className="container">
            <div className="row hero-wrapper d-flex">
                <div className="col-md-8 col-lg-8 hero-content lh-base">
                    <div className="hero-name">Hello, I am <span className='hero-name--name2'>Arafath </span></div>
                    <div ref={typedTextRef} className="hero-typedAnimation"></div>
                    <div className="buttons">                  
                      <div className="btn btn-outline-primary"><a href="">Resume <i className="fa-solid fa-download px-2"></i></a></div>
                      {/* <div className="btn btn-outline-primary"><a href="https://unsplash.com/" target='blank'>My Works <i className="fa-solid fa-person-digging px-2"></i></a></div> */}
                    </div>
                </div>
                <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} className="col-md-4 col-lg-4 hero__col-2">
                    <img src={avatar} className='ill-img w-100' alt="" />
                </motion.div>
            </div>
        </div>
      </section>
  </>
}

export default Content