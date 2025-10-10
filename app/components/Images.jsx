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
            color: "#dddddd",
            stagger: {
                // from: "random",
                each: 0.3
            },

        });


        islandTimeline.from('.imageCon', {
            duration: 1,
            ease: "power1",
            x: (index) => index % 2 === 0 ? -100 : 100            // transformOrigin: "top center"
        })


        islandTimeline.from('.island', {
            height: 0,
            duration: 2,
            ease: "power1",
        })

       
        islandTimeline.from('.island1', {
            left:(index)=> index % 2 === 0 ? "100%" : "-100%",
            duration: 2,
            ease: "power1",
        })
          
        islandTimeline.from('.thirdOne', {
            y:4500,
            duration: 2,
            ease: "power1",
        })
        


     
    })
    return (
        <div className='islandContainer w-full h-screen '>
            <h1 className='islandText text-center z-1 xl:text-[14vh] translate-y-30 2xl:text-[16vh]  ml:text-[10vh] lg:text-[6vh] xd:text-[6vh] sm:text-[5vh]  m:text-[4vh]  xm:text-[4vh] md:text-[7vh]      text-black'>Around The World</h1>
            <div className='relative translate-y-20 w-full h-3/5 flex xl:flex-row justify-evenly items-center gap-4 px-5'>
                    <div className='thirdOne absolute xl:h-100 xl:w-120 m:w-64 m:h-64 xm:w-72 xm:h-72 sm:w-82 sm:h-82 md:w-96 md:h-96  lg:w-120 lg:h-100   z-20 bottom-20 shadow-xl/40 rounded-t-2xl overflow-hidden'>
                        <Image   sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw" src={"/image5.webp"} alt='image' fill className=' object-cover' />
                    </div>
                <div className='imageCon relative  flex-1 xl:h-120 h-60 mt-20 bg-black/10 overflow-hidden shadow-xl/40 rounded-tr-sm xl:rounded-tr-2xl  '>
                    <Image   sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw" src={"/image1.webp"} alt='image' fill className='island object-cover' />
                    <Image   sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw" src={"/image3.webp"} alt='image' fill className='island1 object-cover' />
                </div>

                <div className='imageCon relative  aspect-[16/9]  flex-1 xl:h-120 h-60 mt-20 bg-black/10 overflow-hidden shadow-xl/40 rounded-tl-sm xl:rounded-tl-2xl      '>
                    <Image   sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw" src={"/image2.webp"} alt='image' className='island object-cover' fill />
                    <Image  sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw" src={"/image4.webp"} alt='image' className='island1 object-cover' fill />
                </div>



            </div>

        </div>
    )
}

export default Images

