import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  return (
    <>
        <div className=' h-[600px] md:w-full  bg-beige-400 color-black  pt-14 'ref={ref}>
            <h1 className='md:text-8xl text-6xl text-center p-10 pt-2 font-bold rounded-md mb-16 sm:w-[650px] w-[90%] bg-teal-600 text-white h-32 permanent-font mt-32'>Contact Us</h1>
            <h1 className='text-4xl font-semibold  m-2 md:m-10'>Phone Number: <span className='font-bold'>8057839525</span></h1>
            <h1 className='text-4xl  font-semibold m-2 md:m-10'>Email Id: <span className='font-medium text-3xl md:text-4xl'>rekhamalasi@gamil.com</span></h1>
            
            {/* <h1 className='text-5xl font-bold p-8 border-black border-4 inline-block w-max bg-slate-600 bg-blend-color-burn text-white font-mono m-10'>Phone Number: <span className='font-mono text-green-300'>8279793224</span></h1>
            <h1 className='text-5xl font-bold p-8 border-black border-4 inline-block w-max bg-slate-600 bg-blend-color-burn text-white font-mono m-10'>Email :<span>5V9gW@example.com</span></h1>
            <a className='text-5xl font-bold p-8 border-black border-4 inline-block w-max bg-slate-600 bg-blend-color-burn text-white font-mono m-10' href='www.instagram.com'>Instagram </a>
            <a className='text-5xl font-bold p-8 border-black border-4 inline-block w-max bg-slate-600 bg-blend-color-burn text-white font-mono m-10' href='www.instagram.com'>Facebook </a>
            <a className='text-5xl font-bold p-8 border-black border-4 inline-block w-max bg-slate-600 bg-blend-color-burn text-white font-mono m-10' href='www.instagram.com'>Linkedin</a>
            <a className='text-5xl font-bold p-8 border-black border-4 inline-block w-max bg-slate-600 bg-blend-color-burn text-white font-mono m-10' href='www.instagram.com'>Twitter(X) </a> */}
   </div> 
    </>
  )
})
Contact.displayName = 'Contact';

export default Contact