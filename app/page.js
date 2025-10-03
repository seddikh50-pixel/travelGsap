"use client"
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Hero from "./components/Hero";
import Borders from "./components/Borders";
import Images from "./components/Images";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 1.5,
    });
    // const body = document.body
    // setTimeout(() => {
    //   body.style.overflow = "scroll"
    // }, 3000)
    // clipPath: "inset(0% 0% round 0px)"
    setTimeout(() => {
        gsap.fromTo('.anima',
      {
        transformOrigin: "top center",
        scaleY: "100%"
      }, // البداية (شبه خط)
      {
        scaleY: "0",
        transformOrigin: "top center",
        duration: 3,
        ease: "back.inOut",
        stagger: 0.2
      }
    )
    }, 1000)
    
    const barsTimeline = gsap.timeline({
      repeat: -1,    
      yoyo: true,  
      defaults: { duration: 1, ease: "power2.inOut" } 
    })


    barsTimeline.to('.bar', {
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: 0.3,

    })



  });
  return (

    <div id="smooth-wrapper" >
      <div id="smooth-content" className="w-screen relative " >
        <div className="anima  w-full h-[100vh] bg-white overflow-hidden absolute  z-50">
          <div className="w-20 h-10 absolute bottom-5 right-5 z-50  flex ">
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
            <div className="bar bg-black flex-1 h-full w-full"></div>
          </div>
        </div>
        <Hero />
        <Borders />
        <Images/> 


      </div>
    </div>

  );
}
