import React, { useState } from "react";
import PropTypes from 'prop-types';
import './index.css';


const Header = ({scrollToVision, scrollToContact, scrollToServices, scrollToFaq, scrollToHome }) => {

  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  const scrollToHead = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="flex w-[100%] sm:w-[100%]  h-32 justify-between bg-custom-gradient ">
        <button className="bg-teal-900 hover:bg-gray-800 text-white font-bold hover:text-white py-2 px-4  border border-black hover:border-transparent rounded fixed bottom-4 right-4" onClick={scrollToHead}>Home</button>
        <div className={`w-[20%] md:m-4 h-32 text-5xl m-5  font-bold permanent-font ${ isOpen ? 'head': 'block'  }`}>
          <h1>ECSTASY QUEST</h1>
        </div>
      
        <button
          onClick={toggleMenu}
      className={`text-white text-2xl block md:hidden m-6 ${ isOpen ? 'menu': 'block'  }`}
        >
          &#9776; 
        </button>
        <nav className={`${ isOpen ? 'block' : 'hidden' } md:flex bg-teal-400 h-96 md:h-32 p-1 rounded-md md:bg-transparent space-y-4`}>
           <div className=" md:flex-row flex flex-col justify-evenly gap-10 w-full  font-bold shadow-sm font-sherif">
          <button className="inline-block text-xl bg-transparent hover:bg-gray-900  text-white font-bold hover:text-teal-500 px-2 hover:border-black  rounded-xl font-serif" onClick={scrollToHome}>Home</button>
          <button className="inline-block text-xl bg-transparent hover:bg-gray-900  text-white font-bold hover:text-teal-500 px-2 hover:border-black  rounded-xl font-serif" onClick={scrollToFaq}>About Us</button>
          <button className="inline-block text-xl bg-transparent hover:bg-gray-900  text-white font-bold hover:text-teal-500 px-2 hover:border-black  rounded-xl font-serif" onClick={scrollToVision}>Vision</button>
          <button className="inline-block text-xl bg-transparent hover:bg-gray-900  text-white font-bold hover:text-teal-500 px-2 hover:border-black  rounded-xl font-serif" onClick={scrollToServices}>Services</button>
          <button className="inline-block text-xl bg-transparent hover:bg-gray-900  text-white font-bold hover:text-teal-500 px-2 hover:border-black  rounded-xl font-serif" onClick={scrollToContact}>Contact</button>
        </div>
        </nav>
      </div>
    </>
  );
};

Header.propTypes = {
  scrollToVision: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
  scrollToServices: PropTypes.func.isRequired,
  scrollToFaq: PropTypes.func.isRequired,
  scrollToHome: PropTypes.func.isRequired,
};

export default Header;
