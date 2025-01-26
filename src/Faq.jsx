import React, { forwardRef } from 'react'

const Faq =forwardRef((props,ref) => {
  return (
    <>
    <h1 className='text-8xl p-10 font-bold font-serif bg-slate-400' ref={ref}>FAQ
    </h1>
    </>
  )
}
)
Faq.displayName = 'Faq';
export default Faq