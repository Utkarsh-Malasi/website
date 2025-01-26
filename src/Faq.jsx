import React, { forwardRef } from 'react'

const Faq =forwardRef((props,ref) => {
  return (
    <>
    <h1 className='text-8xl p-10 font-bold font-serif bg-slate-400'>FAQ
    {props.children}
    </h1>
    </>
  )
}
)
export default Faq