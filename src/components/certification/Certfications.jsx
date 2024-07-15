import React from 'react'
import img1 from '../../assets/GuviCertification.png'
import img2 from '../../assets/UdemyCertification.png'
import img3 from '../../assets/CourseraCertifications.png'
import './certifications.scss'

const Certifications = () => {
  return <>
  <section className='portfolio'>
    <div className="container">
        <div className="row">
            <div className="h1 fw-bold text-center py-5">Certifications</div>
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img1} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Full-Stack Web Development Certification (MERN)</div>
                            <p className='fw-bold'>GUVI</p>
                                <div className='ic-div'>
                                    <a href="https://www.guvi.in/share-certificate/707JQ71KpIr7281206" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-certificate px-1"></i>View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>                      
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img2} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>The Complete 2024 Web Development Bootcamp</div>
                            <p className='fw-bold'>UDEMY</p>
                                <div className='ic-div'>
                                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-f0886b35-48b1-4c30-8318-5b78f8444dcc.jpg" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-certificate px-1"></i>View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>                      
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img3} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Meta Front-End Developer</div>
                            <p className='fw-bold'>COURSERA</p>
                                <div className='ic-div'>
                                    <a href="https://www.coursera.org/account/accomplishments/professional-cert/AJQYF4M4LNRF" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-certificate px-1"></i>View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>                      
        </div>
    </div>
  </section>
  </>
}

export default Certifications