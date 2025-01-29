import React , { forwardRef } from 'react'

const Services =forwardRef((props, ref) => {
  return (
    <>
    <div className=' font-bold pt-32 h-5/6' ref={ref}>
        <h1 className=' text-6xl sm:text-8xl mb-10 text-center pt-4 rounded-md w-[80%] sm:w-[500px] bg-teal-600 text-white h-32 permanent-font '>Services</h1>
      <h1 className='text-4xl font-semibold m-10'>Individual Counselling</h1>
      <h1 className='text-4xl font-semibold m-10'>Group Counselling</h1>
      <h1 className='text-4xl font-semibold m-10'>Special Education</h1>
      <h1 className='text-4xl font-semibold m-10'>Intervention Plans</h1>
      <h1 className='text-4xl font-semibold m-10'>11th & 12th Psychology</h1>
        {/* <div className='grid grid-cols-2 gap-4'>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>Individual Counselling</button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>Group Counselling</button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>Special Education</button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>Intervention Plans </button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>11th and 12th  Psychology</button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>11th and 12th  Psychology</button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>11th and 12th  Psychology</button>
          <button className='text-5xl font-serif font-medium ml-5 mr-4 shadow-xl   border-4 border-black p-4 text-teal-500 rounded-md bg-slate-700'>11th and 12th  Psychology</button>
        </div> */}
    </div>
    </>
  )
})

Services.displayName = 'Services'

export default Services