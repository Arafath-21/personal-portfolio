import React from 'react'
import { useNavigate } from 'react-router-dom'
import './topbar.scss'

const TopBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (event, path) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="navbar navbar-expand-md shadow fixed-top">
      <div className="container menu">
        <a className="navbar-brand menu__brand h1" href="#" onClick={(event) => handleNavigation(event, '/home')}>
          Arafath A
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav  mb-4 mb-lg-0 menu--links">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" onClick={(event) => handleNavigation(event, '/')}><i className="fa-solid fa-house px-1"></i>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(event) => handleNavigation(event, '/about')}><i className="fa-solid fa-user px-1"></i>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(event) => handleNavigation(event, '/work')}><i className="fa-solid fa-briefcase px-1"></i>Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(event) => handleNavigation(event, '/skills')}><i className="fa-solid fa-fill-drip px-1"></i>Skills</a>
            </li>        
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(event) => handleNavigation(event, '/certifications')}><i className="fa-solid fa-certificate px-1"></i>Certifications</a>
            </li>            
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(event) => handleNavigation(event, '/contact')}><i className="fa-solid fa-mobile-retro px-1"></i>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
