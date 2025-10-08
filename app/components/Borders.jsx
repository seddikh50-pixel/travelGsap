"use client"
import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(SplitText)




const Borders = () => {



    const [isMobile, setIsMobile] = useState(false);


    const travels = ["/travels/travel1.webp", "/travels/travel2.webp", "/travels/travel3.webp", "/travels/travel4.webp", "/travels/travel5.webp"]

    useEffect(() => {

        if (window.innerWidth <= 1024) {
            setIsMobile(true);
            gsap.to('.singleImage', {
                // transform: "translateZ(-2000px)",
                x: 1000,
                transformOrigin: "left center",
                duration: 1,
                ease: "power1",
                onComplete : ()=> console.log("com")

            })

        }

    }, []);


    useGSAP(() => {

        const splitBorder = SplitText.create('.borders', { type: "chars" })




        const borderTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".borderContainer",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,

            }
        })
       

        borderTimeline.to('.logo',{
            color : "black",
            ease : "power1"
        })
       


        gsap.from(splitBorder.chars, {
            duration: 1,
            y: -100,       // animate from 100px below
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: {
                from: "random",
                each: 0.3
            },
            scrollTrigger: {
                trigger: ".borderContainer",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
            }
        });

        if(isMobile){
            borderTimeline.to('.singleImage', {
            transform: "translateZ(0px)",

            transformOrigin: "left center",
            duration: 1,
            ease: "power1",

        })

        }

        if (!isMobile) {
            borderTimeline.from('.travelImage', {
                transform: "translateZ(-2000px)",
                rotateY: 45,
                transformOrigin: "left center",
                duration: 1,
                ease: "power1",
                stagger: 0.3,

            })

        }







    })
    return (
        <div className='borderContainer h-screen w-screen flex justify-center items-center '>

            <div className='travels absolute  w-full h-full flex' >

                {
                    isMobile ?
                        <div className=' relative h-full w-full' style={{ perspective: "2000px" }}>
                            <Image src={"/yellowCar.webp"} fill className="singleImage  object-cover" alt='car' />
                        </div>
                        :
                        travels.map((img, index) => (
                            <div key={index} className='relative flex-1 w-full h-full' style={{ perspective: "2000px" }}>
                                <Image

                                    src={img}
                                    alt={`travel ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 20vw"
                                    className="travelImage object-cover"
                                />
                            </div>
                        ))
                }
            </div>
            <div className=''>
              
                <h1 className='borders  -translate-x-1/2 -translate-y-full whitespace-nowrap text-shadow-lg/30 text-shadow-black xl:text-[8vh] ml:text-[7vh] lg:text-[6vh] xd:text-[4vh] sm:text-[4vh]  m:text-[3vh]  xm:text-[3vh] md:text-[5vh]   l absolute z-1 s   text-amber-100 uppercase '>world without borders</h1>
            </div>

        </div>
    )
}

export default Borders
