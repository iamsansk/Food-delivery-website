import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Cart } from './Components/Cart Page/Cart'
import { Checkout } from './Components/Checkout Page/Checkout'
import { HomePage } from './Components/Home Page/LandingPage/HomePage'
import { Footer } from './Components/Footer/Footer'
import { Contact } from './Components/Contact Page/Contact'
import ScrollToTop from './Components/ScrollToTop'
import { ThankYou } from './Components/Thank You Page/ThankYou'
import { ProtectedRoute } from './Components/Protected Route/ProtectedRoute'
import { Deals } from './Components/Deals/Deals'
import { Shop } from './Components/Shop Page/Shop'

function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
        <Route path='/thankyou' element={<ThankYou/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
