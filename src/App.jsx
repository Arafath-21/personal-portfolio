import React from 'react'
import './app.scss'
import TopBar from './components/topbar/TopBar'
import Content from './components/content/Content'
import About from './components/about/About'

const App = () => {
  return <>
    <TopBar />
    <Content />
    <About />
  </>
}

export default App