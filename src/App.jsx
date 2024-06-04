import { Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import './App.css'
import Branches from './pages/branches/Branches'
import Cart from './pages/cart/Cart'
import Map from './pages/branches/Map'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </>
  )
}

export default App
