import React from 'react'
import img from '../../assets/project-1.png'
import img1 from '../../assets/MergingIdeas.png'
import img2 from '../../assets/weather.png'
import img3 from '../../assets/ZenClass.png'
import img4 from '../../assets/billtracker.png'
import img5 from '../../assets/Pizza.png'
import img6 from '../../assets/Recipe_app.png'
import './work.scss'

const Work = () => {
  return <>
  <section className='portfolio'>
    <div className="container">
        <div className="row">
            <div className="h1 fw-bold text-center py-5">Works</div>
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img3} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Zen Class Dashboard</div>
                            <p className='fw-bold'>MERN</p>
                                <div className='ic-div'>
                                    <a href="https://github.com/Arafath-21/Zen-class-student-dashboard-frontend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Front-End Code</a>            
                                    <a href="https://github.com/Arafath-21/Zen-class-student-dashboard-backend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Back-End Code</a>            
                                    <a href="https://zen-clas-dashboard.netlify.app/" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>  
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img4} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Bill Tracking App</div>
                            <p className='fw-bold'>MERN</p>
                                <div className='ic-div'>
                                    <a href="https://github.com/Arafath-21/Bill-FrontEnd" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Front-End Code</a>            
                                    <a href="https://github.com/Arafath-21/Bill-backend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Back-End Code</a>            
                                    <a href="https://melodic-gelato-3f13b3.netlify.app/" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>  
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img5} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Pizza Booking App</div>
                            <p className='fw-bold'>MERN</p>
                                <div className='ic-div'>
                                    <a href="https://github.com/Arafath-21/pizza-frontend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Front-End Code</a>            
                                    <a href="https://github.com/Arafath-21/pizza-backend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Back-End Code</a>            
                                    <a href="https://fantastic-starlight-54a0a9.netlify.app/" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>  
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img6} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Recipie Blog App</div>
                            <p className='fw-bold'>MERN</p>
                                <div className='ic-div'>
                                    <a href="https://github.com/Arafath-21/Recipe_application_frontend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Front-End Code</a>            
                                    <a href="https://github.com/Arafath-21/Recipe_application_backend" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Back-End Code</a>            
                                    <a href="https://spiffy-frangipane-894845.netlify.app/" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>  
                <div className="col-lg-6 col-md-6">                    
                    <div className="portfolio-box">
                        <img src={img} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Travel Blog</div>
                            <p className='fw-bold'>React</p>
                                <div className='align-items-center ic-div'>
                                    <a href="https://github.com/Arafath-21/travelblog" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Git</a>            
                                    <a href="https://harmonious-dragon-b81f3f.netlify.app" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
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
                            <div className='h4 fw-bolder'>Weather App</div>
                            <p className='fw-bold'>Html,css,js</p>
                                <div className='align-items-center ic-div'>
                                    <a href="https://github.com/Arafath-21/Weather-App-Promise-" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Git</a>            
                                    <a href="https://enchanting-naiad-4729c7.netlify.app/" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>                                
                <div className="col-lg-6 col-md-6">
                    <div className="portfolio-box">
                    <img src={img1} alt="" className=''/>  
                        <div className="portfolio-info">
                            <div className="caption">
                            <div className='h4 fw-bolder'>Merging Ideas</div>
                            <p className='fw-bold'>Html,css,js</p>
                                <div className='align-items-center ic-div'>
                                    <a href="https://github.com/Arafath-21/merging-Ideas" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-brands fa-github px-1"></i>Git</a>            
                                    <a href="https://merging-ideas.netlify.app/" target="_blank" rel="noopener noreferrer" className="icons"><i className="fa-solid fa-globe px-1"></i>Demo</a>
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

export default Work