import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Image from 'next/image';
import Texts from './Texts';

const Hero = () => {



    useGSAP(() => {

        const texts = document.querySelectorAll('.text')


        const sideTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
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
            y: -205,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        })
        sideTimeline.to(".text2", {
            y: 205,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        }, "<")



          sideTimeline.to(".text1", {
            x: -1300,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        })
        sideTimeline.to(".text2", {
            x: 1300  ,
            transformOrigin: "bottom center",
            ease: "power1",
            duration: 2
        }, "<")

    


    });

    return (
        <div className='hero relative w-full h-screen bg-red-400'>
            <div className=' relative w-full h-full ' style={{ perspective: "700px" }}>
                <Image src={"/side.png"} className='side object-cover absolute z-50 translate-z-0' alt='side' fill />
                <video src={"/clouds.mp4"} className='object-cover w-full h-full' alt='side' loop autoPlay muted />
            </div>
            <Texts />

        </div>
    )
}

export default Hero
