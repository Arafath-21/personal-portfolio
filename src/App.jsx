import React from 'react'
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import './app.scss'
import TopBar from './components/topbar/TopBar'
import Content from './components/content/Content'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Certfications from './components/certification/Certfications'

const App = () => {
  return <>
  <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path='/home' element={<Content />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='certifications' element={<Certfications />}/>
      <Route path='*' element={<Navigate to ='/home' />} />
    </Routes>
    </BrowserRouter>  
  </>
}

export default App