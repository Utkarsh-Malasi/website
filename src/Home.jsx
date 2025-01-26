import React, { forwardRef } from "react";
import Header from "./header";
import l2 from "./image/l2.png";
import "./index.css";
import { useNavigate } from 'react-router-dom';
const Home =forwardRef((props, ref)=> {
  return (
    <>
   

      
    <div className="color" ref={ref}>
< div className=" h-[600px] w-full image">
      </div>
    {/* <h1 className="text-6xl font-extrabold  rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-4 w-[40%] p-10">ABOUT OUR TEAM</h1>
      <p className="text-2xl font-sans font-semibold leading-relaxed bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-[100%] p-10">
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
      </p> */}
    </div>
    </>
  );
});

export default Home;
