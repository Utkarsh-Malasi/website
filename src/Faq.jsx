import React, { forwardRef } from 'react'

const Faq =forwardRef((props,ref) => {
  return (
    <>
    <div  ref={ref}>
  
    <h1 className="text-5xl sm:text-6xl font-extrabold text-center   rounded-lg bg-teal-600 text-white permanent-font m-4  sm:w-[40%] p-10">ABOUT OUR TEAM</h1>
      <p className="text-3xl  font-semibold leading-relaxed  w-[100%] p-10">
        Dedicated Counseling Psychologist, Mental health professional and
        Special Educator specializing in comprehensive support for individuals
        with diverse needs, such as autism, ADHD, intellectual disabilities, and
        learning disabilities.Proficient in designing personalized intervention
        plans, lesson plans, and psychoeducational reports to create an
        inclusive learning environment. Committed to promoting mental health and
        academic success by collaborating with multidisciplinary teams to ensure
        holistic care and meaningful growth for all students. Skilled in
        counseling parents, facilitating behavioral and academic progress, and
        implementing evidence-based strategies to optimize each child's
        development.
      </p>
      </div>
    </>
  )
}
)
Faq.displayName = 'Faq';
export default Faq