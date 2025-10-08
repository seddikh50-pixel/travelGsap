"use client"
import Link from 'next/link'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";



const Header = () => {
    return (
        <div className='header fixed  w-full  z-2 flex h-20 justify-between items-center 2xl:px-15 xl:px-15 lg:px-14 md:px-12 sm:px-11 xm:px-8 m:px-3 2xl:pt-5 xl:pt-5 lg:pt-5'>
            <div>
                <h1 className="logo 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl xm:text-4xl m:text-3xl  font-bold text-white">TRAVEL.</h1>
            </div>
            <div className='2xl:hidden xl:hidden ml:block lg:block  md:block sm:block xm:block m:block   '>
                <CiMenuFries onClick={()=> {
                    gsap.to('.mobileMenu',{
                        x:"-100%",
                        duration : 0.5
                       
                    })
                }} className=' md:text-5xl sm:text-4xl xm:text-4xl m:text-3xl lg:xl font-bold  text-white' />
            </div>
          
            <div className='text-2xl xl:flex lg:hidden 2xl:flex md:hidden sm:hidden ml:hidden  xm:hidden m:hidden gap-7 bg-white  border-2 '>
                <Link href={"/"} className='link group relative text-black bg-white overflow-hidden  '>

                    <span className='block left-0 top-0 group-hover:-translate-y-15 transition-all duration-500 px-5 py-3 '>Work</span>
                    <span className='absolute left-0 top-10 group-hover:-translate-y-10 transition-all duration-500 px-5 py-3 '>Work</span>
                </Link>
                <Link href={"/"} className='link group relative text-black bg-white overflow-hidden  '>

                    <span className='block left-0 top-0 group-hover:-translate-y-15 transition-all duration-500 px-5 py-3 '>Agency</span>
                    <span className='absolute left-0 top-10 group-hover:-translate-y-10 transition-all duration-500 px-5 py-3 ' >Agency</span>
                </Link>
                <Link href={"/"} className='link group relative text-black bg-white overflow-hidden  '>

                    <span className='block left-0 top-0 group-hover:-translate-y-15 transition-all duration-500 px-5 py-3 '>Services</span>
                    <span className='absolute left-0 top-10 group-hover:-translate-y-10 transition-all duration-500 px-5 py-3 '>Services</span>
                </Link>
                <Link href={"/"} className='link group relative text-black bg-white overflow-hidden  '>

                    <span className='block left-0 top-0 group-hover:-translate-y-10 transition-all duration-500   bg-black px-5 py-3 text-white   '>Let's Talk</span>
                    <span className='absolute left-0 top-10 group-hover:-translate-y-10 transition-all  duration-500 bg-black       text-white px-5 py-3'>Let's Talk</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
