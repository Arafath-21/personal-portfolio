import React from 'react'
import './app.scss'
import TopBar from './components/topbar/TopBar'
import Content from './components/content/Content'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Work from './components/work/Work'

const App = () => {
  return <>
    <TopBar />
    <Content />
    <About />
    <Work />
    <Contact />
  </>
}

export default App