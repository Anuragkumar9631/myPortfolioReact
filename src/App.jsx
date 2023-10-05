import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Themes />
    <Routes>
     <Route index element = {<Home />} />
     <Route path = 'about' element = {<About />} />
     <Route path = 'contact' element = {<Contact />} />
     <Route path = 'portfolio' element = {<Portfolio />} />
     
    </Routes>
    </BrowserRouter>
  )
}

export default App
