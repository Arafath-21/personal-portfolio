import React from 'react'
import img from '../../assets/project-1.png'
import img1 from '../../assets/MergingIdeas.png'
import img2 from '../../assets/weather.png'
import './work.scss'

const Work = () => {
  return <>
  <section className='portfolio'>
    <div className="container">
        <div className="row">
            <div className="h1 fw-bold text-center py-5">Works</div>
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">                    
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
                <div className="col-lg-4 col-md-6">                    
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
        </div>
    </div>
  </section>
  </>
}

export default Work