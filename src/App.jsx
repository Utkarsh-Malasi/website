import React, { useRef ,forwardRef} from 'react';
import Header from './Header.jsx';
import './index.css';
import Vision from './Vision.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Faq from './Faq.jsx';

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
      <Vision ref={visionRef}/>
      <Services ref={servicesRef}/>
      <Contact ref={contactRef}/>
      <Faq ref={faqRef}/>
    </>
  );
}

export default App;

