import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  return (
    <>
        <div className='color h-[600px]  pt-14 'ref={ref}>
            <h1 className='text-8xl p-10 font-bold font-serif'>CONTACT</h1>
        <h1 className='text-5xl font-bold p-8'>Contact Number: 8279793224</h1>
        <h1 className='text-5xl font-bold p-8'>Email: 5V9gW@example.com</h1>
        <a href='www.instagram.com' className='text-5xl font-bold p-8'>Instagram:SNEHA PSCYHOLOGY</a>
   </div> </>
  )
})

export default Contact