import { useTranslation } from 'react-i18next';
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import Footer from './components/Footer';
import Services from './pages/Services';
import Plans from './pages/Plans';

function App() {
  const { i18n } = useTranslation();
  const languageSelected = i18n.language;
  useEffect(() => {
    document.body.dir = languageSelected === 'ar' ? 'rtl' : 'ltr';
  }, [languageSelected]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/plans' element={<Plans />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
