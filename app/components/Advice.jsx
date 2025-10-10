"use client"
import React from 'react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Advice = () => {

    useGSAP(()=>{
    const tavelAdvice = SplitText.create('.travelAdvice', { type: "words" })
      const adviceTimeline = gsap.timeline({
        scrollTrigger : {
            trigger : ".advice",
            scrub : true,
            start : "top top ",
            end : "bottom top",
            pin : true
        }
      })

    adviceTimeline.from(tavelAdvice.words, {

      duration: 1,
      y: (index)=> {
        return index % 2 === 0 ? 300 : -300
      },
      autoAlpha :0,
      stagger: {
        each: 0.3,

      },
      ease: "back.out"
    })

    })
  return (
    <div>
       <div className="advice w-full h-screen bg-white flex justify-center items-center">
          <p className="travelAdvice 3xl:text-7xl xm:text-md sm:text-xl md:text-2xl lg:text-4xl 2xl:text-5xl   m:text-sm px-5 text-center text-black font-black max-w-[800px]">Travel light, stay curious, and embrace every new experience along the way</p>
        </div>
    </div>
  )
}

export default Advice
