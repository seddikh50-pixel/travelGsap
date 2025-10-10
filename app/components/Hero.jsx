import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Image from 'next/image';
import Texts from './Texts';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

     const under400 = useMediaQuery({ maxWidth: 399 });
  const between400_500 = useMediaQuery({ minWidth: 400, maxWidth: 499 });
  const between500_700 = useMediaQuery({ minWidth: 500, maxWidth: 699 });
  const above700 = useMediaQuery({ minWidth: 700 });

  let times = 90; // القيمة الافتراضية
  if (under400) times = 40;
  else if (between400_500) times = 50;
  else if (between500_700) times = 70;
  else if (above700) times = 120;


    useGSAP(() => {

        const texts = document.querySelectorAll('.text')
        // gsap.from('.sideContainer', {
        //     duration: 2,
        //     ease: "power1",
        //     scale: 0.5,
        //     delay: 4
        // })


        const sideTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,

            }
        })
        sideTimeline.to('.side', {
            transform: "translateZ(690px)",
            duration: 2,
            x: -150
        })


        sideTimeline.from(".textWrapper", {
            y: 300,
            opacity: 0,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        })





        sideTimeline.to(".text1", {
            y : 2   * times ,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        })
        sideTimeline.to(".text2", {
             y : times + 20,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        }, "<")
            sideTimeline.to(".text3", {
             y :  -times   ,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        }, "<")

            sideTimeline.to(".text4", {
             y : (-times * 2 ) + 20 ,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        }, "<")




        // sideTimeline.to(".text1", {
        //     x: -1500,
        //     transformOrigin: "bottom center",
        //     ease: "power1",
        //     duration: 2
        // })
        // sideTimeline.to(".text2", {
        //     x: 1500,
        //     transformOrigin: "bottom center",
        //     ease: "power1",
        //     duration: 2
        // }, "<")






    });

    return (
        <div className='hero relative w-full h-screen'>
            <div className=' relative w-full h-full flex justify-center items-center'>
                <div className='sideContainer absolute flex justify-center items-center h-full w-full ' style={{ perspective: "700px" }}>
                    <Image src={"/side.png"} className='side xl:object-center object-cover absolute z-50 translate-z-0' alt='side' fill />
                </div>
                <video src={"/clouds.mp4"} className='object-cover w-full h-full' alt='side' loop autoPlay muted />
            </div>
            <Texts />

        </div>
    )
}

export default Hero
