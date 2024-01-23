import React from 'react'
import './topbar.scss'

const TopBar = () => {
  return <>
<nav className="navbar navbar-expand-md shadow fixed-top">
  <div className="container menu">
    <a className="navbar-brand menu__brand h1" href="#">Arafath A</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav  mb-4 mb-lg-0 menu--links">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><i className="fa-solid fa-house px-1"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid fa-user px-1"></i>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid fa-briefcase px-1"></i>Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid fa-mobile-retro px-1"></i>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  </>
}

export default TopBar