import React from 'react'
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import './app.scss'
import TopBar from './components/topbar/TopBar'
import Content from './components/content/Content'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Work from './components/work/Work'

const App = () => {
  return <>
  <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path='/home' element={<Content />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='*' element={<Navigate to ='/home' />} />
    </Routes>
    </BrowserRouter>  
  </>
}

export default App