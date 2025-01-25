import React from "react";
import './index.css'
import logo from "/src/image/logo.png";
import l2 from "/src/image/l2.png";

const Header = ({scrollToVision, scrollToContact, scrollToServices, scrollToFaq, scrollToHome } ) => {
  const scrollToHead = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
    
      <div className="flex w-full h-48 justify-between bg-custom-gradient ">
      <button className="bg-blue-400 hover:bg-gray-800 text-white font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded fixed bottom-4 right-4" onClick={scrollToHead}>Home</button>
        <div className="w-[20%] h-36  text-5xl m-10 p-3 font-bold   from-neutral-950">
          <h1>ECSTASY QUEST</h1>
        </div>
        <div className="w-[60%] flex  justify-end m-10 p-8 gap-16 font-semibold shadow-md font-mono">
          <button className=" inline-block text-4xl  bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white  px-2  hover:border-transparent rounded" onClick={scrollToHome}>Home</button>
          <button className=" inline-block text-4xl  bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white  px-2   hover:border-transparent rounded" onClick={scrollToVision}>Vision</button>
          <button className="inline-block text-4xl  bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white  px-2   hover:border-transparent rounded" onClick={scrollToServices}>Services</button>
          <button className=" inline-block text-4xl  bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white  px-2   hover:border-transparent rounded" onClick={scrollToContact}>Contact</button>
          <button className="inline-block text-4xl  bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white  px-2   hover:border-transparent rounded" onClick={scrollToFaq}>FAQ</button>
        </div>
      </div>

      </>
  );
};

export default Header;
