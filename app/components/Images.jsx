"use client"
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)


const Images = () => {
    useGSAP(() => {
        const splitIsland = SplitText.create('.islandText', { type: "chars" })
 

        const islandTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".islandContainer",
                start: "top top",
                end: "bottom top ",
                scrub: true,
                pin: true

            }
        })
        

            islandTimeline.from(splitIsland.chars, {
            duration: 1,
            color : "#dddddd",
            stagger: {
                // from: "random",
                each: 0.3
            },
        
        });





        islandTimeline.from('.island', {
            height: 0,
            duration: 1,
            ease: "power1",
            // transformOrigin: "top center"
        })

    })
    return (
        <div className='islandContainer w-full h-screen '>
            <h1 className='islandText text-center z-1 text-[15vh] absolute left-74 top-0 text-black'>Visit Maldives</h1>
            <div className='relative w-full h-full flex justify-evenly items-center'>

                <div className='relative w-120 h-120 mt-10 bg-black '>
                    <Image src={"/image1.webp"} alt='image' fill className='island object-cover' />
                </div>

                <div className='relative  w-120 h-120 mt-10 bg-black   '>
                    <Image src={"/image2.webp"} alt='image' className='island object-cover' fill />
                </div>
            </div>

        </div>
    )
}

export default Images

