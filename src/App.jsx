import React, { useRef } from 'react'
import Header from './Header'
import './index.css'
import Vision from './Vision'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Faq from './Faq'
import { use } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const visionRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <Header 
       scrollToVision={() => scrollToSection(visionRef)}
       scrollToContact={() => scrollToSection(contactRef)}
       scrollToServices={() => scrollToSection(servicesRef)}
       scrollToFaq={() => scrollToSection(faqRef)}
       scrollToHome={() => scrollToSection(homeRef)}
       
       />
      <Home ref={homeRef}/>
      <Vision  ref={visionRef}/>
      <Services ref={servicesRef}/>
      <Contact ref={contactRef}/>
      <Faq ref={faqRef}/>

      
    </>
  )
}

export default App
