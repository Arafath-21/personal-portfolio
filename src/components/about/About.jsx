import React from 'react'
import './about.scss'
import avatar from '../../assets/avatar.jpg'
const About = () => {
  return <>
  <section className='about'>
    <div className="container">
        <div className="row d-flex">
            <div className="col-lg-8 col-md-8">
                <div className="h1 fw-bold">About Me</div>
                <div className='wrapper-desc'>Hello! I'm Arafath,I have 2+ years of experience as a COBOL devloper & a passionate and versatile developer
                 with expertise in various aspects of web development. Whether it's crafting beautiful UI's, handling server-side logic,
                 or creating robust full-stack applications, I thrive in the world of coding.</div>
                 <br />
                 <div className="wrapper-desc">I'm always eager to take on new challenges and contribute to innovative projects. If you're looking for a developer who is not only skilled but also passionate about creating exceptional digital experiences, I'd love to connect. Feel free to explore my projects and get in touch for potential collaborations!</div>

                 <div className="ic-div">
                    <div className="icons"><i class="fa-brands fa-github"></i></div>
                    <div className="icons"><i class="fa-brands fa-linkedin"></i></div>
                    <div className="icons"><i class="fa-brands fa-instagram"></i></div>
                    <div className="icons"><i class="fa-solid fa-envelope"></i></div>
                    <div className="icons"><i class="fa-solid fa-phone"></i></div>
                 </div>

            </div>            
            <div className="col-lg-4 col-md-4 fesc">
                <div className="wrapper">
                    <img src={avatar} alt="" />
                </div>
            </div>            
        </div>
    </div>
  </section>
  </>
}

export default About