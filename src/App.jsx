import { useTranslation } from 'react-i18next';
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from 'react';
import Footer from './components/Footer';
import Services from './pages/Services';
import Plans from './pages/Plans';
import RoadMap from './pages/RoadMap';
import SystemIdea from './pages/SystemIdea';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import SharedLayout from './SharedLayout';
import SupplierInfo from './dashboard/SupplierInfo';
import AddProduct from './dashboard/AddProduct';
import OrderPage from './dashboard/OrderPage';

function App() {
  const { i18n } = useTranslation();
  const languageSelected = i18n.language;
  useEffect(() => {
    document.body.dir = languageSelected === 'ar' ? 'rtl' : 'ltr';
  }, [languageSelected]);
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0)
  }, [location])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/road-map' element={<RoadMap />} />
        <Route path='/system-idea' element={<SystemIdea />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<SharedLayout />} >
          <Route index element={<SupplierInfo />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='order-page' element={<OrderPage />} />
          <Route path='initial-binding' element={<h2>initial-binding</h2>} />
          <Route path='binding-store' element={<h2>binding-store</h2>} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
