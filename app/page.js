"use client"
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Hero from "./components/Hero";
import Borders from "./components/Borders";
import Images from "./components/Images";
import { SplitText } from 'gsap/SplitText'
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);




export default function Home() {

  const circleRef = useRef()
  const bigCircleRef = useRef()

  useEffect(() => {
   
    function mouseMove(e) {
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,   // سرعة الحركة
        ease: "power2.out"
      });

      const { width, height } = bigCircleRef.current.getBoundingClientRect();
      console.log(width , height)
       gsap.to(bigCircleRef.current, {
        x: e.clientX - width / 2 ,
        y: e.clientY - height / 2 ,
        duration: 0.3,
        delay : 0.1,   // سرعة الحركة
        ease: "power2.out"
      });
    }
    addEventListener("mousemove", mouseMove)

    return () => removeEventListener("mousemove", mouseMove)
  });



  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 1.5,
    });

    const splitTravel = SplitText.create('.travel', { type: "chars" })

    const travelTimeline = gsap.timeline({})

    travelTimeline.from(splitTravel.chars, {

      duration: 1,
      scaleY: 2,

      stagger: {
        each: 0.3,

      },
      ease: "bounce"
    })
    travelTimeline.fromTo('.anima1',
      {
        clipPath: "inset(0% 0% 0% 0%)",
        width: "100%"
      }, // البداية (شبه خط)
      {
        clipPath: "inset(0% 100% 0% 0%)",
        transformOrigin: "left center",
        duration: 3,
        ease: "back.inOut",


      }
    )

    travelTimeline.to('.anima',
      {
        y: "-100%",
        ease: "bounce",
        duration: 1
      }
    )





    const barsTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 0.5, ease: "power2.inOut" }
    })


    barsTimeline.to('.bar', {
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: 0.3,

    })
    barsTimeline.to('.bar1', {
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: 0.3,

    }, "<")
  });



  return (

    <div id="smooth-wrapper" >
      <div ref={circleRef} className="smallCircle fixed w-3 h-3 left-20 rounded-full bg-black z-100 top-0"></div>
        <div ref={bigCircleRef}  className="bigCircle absolute w-[50px] h-[50px] left-20  border  border-black z-49 top-0" ></div>

      <div id="smooth-content" className="w-screen relative  " >

        <div className="anima1  w-full h-[100vh] bg-black overflow-hidden absolute  z-50">
          <h1 className="travel absolute xl:left-32 left-15  uppercase xl:top-32 top-64 xl:text-[50vh] text-[10vh] font-bold text-white">travel</h1>
          <div className="w-20 h-10 absolute bottom-5 right-5 z-50  flex ">
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
          </div>
        </div>
        <div className="anima  w-full h-[100vh] bg-white overflow-hidden absolute  z-49">
          <h1 className="travel1 absolute xl:left-32 left-15 uppercase xl:top-32 top-64 xl:text-[50vh] text-[10vh] font-bold">travel</h1>
          <div className="w-20 h-10 absolute bottom-5 right-5 z-50  flex ">
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
          </div>
        </div>
        <Hero />
        <Borders />
        <Images />
        <div className="w-full h-screen bg-amber-400 flex justify-center items-center">
        </div>
      </div>
    </div>

  );
}
