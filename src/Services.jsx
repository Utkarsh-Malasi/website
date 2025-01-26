import React , { forwardRef } from 'react'

const Services =forwardRef((props, ref) => {
  return (
    <>
    <div className='color font-bold pt-32 h-5/6' ref={ref}>
        <h1 className='text-8xl mb-10 pl-10 font-serif'>Services</h1>
    <h1 className='text-3xl font-medium p-8'>Individual Counselling</h1>
    <h1 className='text-3xl font-medium p-8'>Group Counselling</h1>
    <h1 className='text-3xl font-medium p-8'>Special Education</h1>
    <h1 className='text-3xl font-medium p-8'>Intervention Plans </h1>
    <h1 className='text-3xl font-medium p-8'>11th and 12th  Psychology</h1>
    </div>
    </>
  )
})

Services.displayName = 'Services'

export default Services