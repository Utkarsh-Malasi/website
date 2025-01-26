import React, { forwardRef } from "react";
const Vision = forwardRef((props,ref) => {
  return (
    <>
      <div className="color p-4 " ref={ref}>
        <div className="text-7xl font-serif font-bold text-slate-900 mb-9">
          Our Vision And Mission
          {props.children}
        </div>
        <div className="text-2xl font-sans font-semibold leading-relaxed">
          At the heart of our philosophy is the belief in kindness—both towards
          oneself and others. We emphasize the importance of prioritizing mental
          health, recognizing that this choice is a vital step in creating a
          more compassionate and supportive community. We encourage everyone to
          choose their mental well-being as a primary focus. When mental health
          is prioritized, everything else aligns, and we can approach life with
          greater clarity and resilience. Our mission is to foster an
          environment where mental health is valued and addressed with care. By
          promoting kindness and prioritizing mental wellness, we aim to create
          a space where no one feels isolated in their journey. Whether it's
          through individual support or collective initiatives, we are dedicated
          to helping individuals navigate the challenges of mental health with
          empathy and understanding. Together, we can cultivate a more
          compassionate world, where mental health concerns are met with care
          and respect.  Ennu: Our approach is rooted in kinship
          theory, where we understand the importance of human relationships in
          fostering mental well-being. We are dedicated to making mental health
          a priority, addressing it with care, wisdom, and professionalism. With
          empathy at the heart of our work, the aim is to break down the
          barriers surrounding mental health and provide accessible,
          compassionate support for all. Together, we can grow a community where
          mental health is respected, understood, and nurtured.
        </div>
      </div>
    </>
  );
});
export default Vision;
