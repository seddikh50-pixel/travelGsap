"use client"
import React, { useEffect, useRef, useState } from 'react'
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
    const piecesRef = useRef([]);

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
                onComplete: () => console.log("com")

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


        borderTimeline.to('.logo', {
            color: "black",
            ease: "power1"
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

        if (isMobile) {
            borderTimeline.to('.singleImage', {
                transform: "translateZ(0px)",

                transformOrigin: "left center",
                duration: 1,
                ease: "power1",

            })

        }

      


        borderTimeline.from(piecesRef.current, {
            transform: "translateZ(-1999px) rotateY(45deg)",
            transformOrigin: "left center",
            stagger: 0.3,
        });







    })
    return (
        <div className='borderContainer relative h-screen w-screen flex justify-center items-center '>

            <div className='travels absolute  w-full h-full flex' >
            


                <div className="image-row flex w-screen h-screen overflow-hidden rounded-none" style={{ perspective: "2000px" }}>
                    {[0, 1, 2, 3].map((i,index) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) piecesRef.current[i] = el;
                            }}
                            className="flex-1"
                            style={{
                                zIndex : `${4 - index}`,
                                backgroundImage: "url('/yellowCar.webp')",
                                backgroundSize: "400% 100%", // الصورة مقسومة 4 أعمدة
                                backgroundPosition: [
                                    "0% 0%",     // العمود الأول
                                    "33.33% 0%", // العمود الثاني
                                    "66.66% 0%", // العمود الثالث
                                    "100% 0%",   // العمود الرابع
                                ][i],
                                width: "25%",   // كل عمود ربع الشاشة
                                height: "100%", // طول الشاشة كامل
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className=''>

                <h1 className='borders  -translate-x-1/2 -translate-y-full whitespace-nowrap text-shadow-lg/30 text-shadow-black xl:text-[8vh] ml:text-[7vh] lg:text-[6vh] xd:text-[4vh] sm:text-[4vh]  m:text-[3vh]  xm:text-[3vh] md:text-[5vh]   l absolute z-1 s   text-amber-100 uppercase '>world without borders</h1>
            </div>

        </div>
    )
}

export default Borders
