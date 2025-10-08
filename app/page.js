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
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Header from "./components/Header";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);




export default function Home() {

  const circleRef = useRef()
  const bigCircleRef = useRef()

  useEffect(() => {
   
    function mouseMove(e) {
      gsap.to(circleRef.current, {
        x: e.clientX - 80,
        y: e.clientY,
        duration: 0.1,   // سرعة الحركة
        ease: "power2.out",
        delay : 0.1
      });

       gsap.to(bigCircleRef.current, {
        x: e.clientX - 100 ,
        y: e.clientY - 20 ,
        duration: 0.1,   // سرعة الحركة
        ease: "power2.out",
        delay : 0.1
      },"<");
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
        duration: 1,
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

       travelTimeline.from('.header',
      {
        y: "-100%",
        ease: "circ",
        duration: 1
      }
    )

        travelTimeline.from('body',
      {
        overflow: "hidden",
        
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
        <Header />
         <div className='mobileMenu absolute z-100 left-full p-10 pt-20   w-full h-screen bg-white flex flex-col'>
          <div className="absolute right-5 top-5 z-50 ">
            <RxCross2 className="text-black text-2xl" onClick={()=>{
              gsap.to('.mobileMenu',{
                x : "100%",
                ease : "power1"
              })
            }} />

          </div>
          <Link href={"/"} className='link cursor-none group relative text-[5vh] text-black  bg-white overflow-hidden  '>
            Work
          </Link>
          <Link href={"/"} className='link group cursor-none relative text-[5vh] text-black bg-white overflow-hidden  '>
            Agency
          </Link>
          <Link href={"/"} className='link group relative text-[5vh] text-black bg-white overflow-hidden  '>
            Services
          </Link>
          <Link href={"/"} className='link group relative text-[5vh] text-black bg-white overflow-hidden  '>
            Let's Talk
          </Link>
        </div>
      <div ref={circleRef} className="smallCircle pointer-events-none fixed w-3 h-3 left-20 xl:block 2xl:block lg:block md:hidden cursor-none sm:hidden xm:hidden m:hidden rounded-full bg-black z-100 top-0"></div>
        <div ref={bigCircleRef}  className="bigCircle pointer-events-none absolute  rounded-full xl:block 2xl:block lg:block md:hidden sm:hidden cursor-none xm:hidden m:hidden w-[50px] h-[50px] left-20  border-1  border-black z-49 top-0" ></div>
        
        <div className="anima1  w-full h-[100vh] bg-black overflow-hidden fixed top-0 left-0 flex justify-center items-center   z-50">
          <h1 className="travel  uppercase 2xl:top-32 md:text-[17vh]  xl:text-[30vh]  2xl:text-[35vh] 3xl:text-[43vh] lg:left-30 lg:text-[20vh] ml:text-[25vh] xd:text-[15vh] xsm:text-[13vh] text-[7vh]  m:text-[10vh] font-bold text-white">travel</h1>
          <div className="w-20 h-10 absolute bottom-5 right-5 z-50  flex ">
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
            <div className="bar1 bg-white flex-1 h-full w-full"></div>
          </div>
        </div>
        <div className="anima  w-full h-[100vh] bg-white overflow-hidden fixed top-0 left-0 flex justify-center items-center   z-49">
          <h1 className="travel1  uppercase   md:text-[17vh]  xl:text-[30vh] 2xl:text-[35vh] 3xl:text-[43vh] ml:text-[25vh]  lg:text-[20vh]  xd:text-[15vh]  sm:text-[13vh]   text-[7vh]    m:text-[10vh]    font-bold">travel</h1>
          <div className="w-20 h-10 absolute bottom-5 right-5 z-50  flex ">
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
          </div>
        </div>

      <div id="smooth-content" className="w-screen relative  " >
        
        <Hero />
        <Borders />
        <Images />
        <div className="w-full h-screen bg-amber-400 flex justify-center items-center">
        </div>
      </div>
    </div>

  );
}
