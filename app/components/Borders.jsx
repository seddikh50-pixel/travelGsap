import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image';
gsap.registerPlugin(SplitText)



const Borders = () => {

    const travels = ["/travels/travel1.webp", "/travels/travel2.webp", "/travels/travel3.webp", "/travels/travel4.webp", "/travels/travel5.webp"]
    useGSAP(() => {
        const splitBorder = SplitText.create('.borders', { type: "chars" })

      


        const borderTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".borderContainer",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,

            }
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
        borderTimeline.from('.travel', {
            height: 0,
            duration: 1,
            ease: "power1",
            stagger: 0.3,
          
        })



    })
    return (
        <div className='borderContainer h-screen w-screen  '>

            <div className='travels  w-full h-full flex'>
                {travels.map((img, index) => (
                    <div key={index} className='relative flex-1 w-full h-full '>
                        <Image

                            src={img}
                            alt={`travel ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw" // تقدير: 5 صور جنب بعض = 20% لكل صورة
                            className="travel object-cover"
                        />
                    </div>
                ))}
            </div>
            <div>
                <h1 className='borders text-shadow-lg/30 text-shadow-amber-100 text-[15vh] absolute z-1 s left-30 top-54 text-black uppercase '>world without borders</h1>
            </div>

        </div>
    )
}

export default Borders
