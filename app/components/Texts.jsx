import React from 'react'

const Texts = () => {
  return (
    <div className='absolute top-0  h-full  w-full '>
      <div className='relative textWrapper  z-5  h-full uppercase w-full'>
        <h1 className='text1 text absolute leading-[0.9] xl:left-105 left-11  xl:top-78 top-72 whitespace-nowrap bg-white  text-black  text-center xl:text-[35vh] text-[15vh] font-bold'> World </h1>
        <h1 className='text middle absolute z-1 xl:left-105 left-11   leading-[0.9] xl:top-78 top-72 whitespace-nowrap  bg-white  text-black text-center xl:text-[35vh] text-[15vh] font-bold'> World </h1>
        <h1 className='text2 text absolute xl:left-105 left-11   xl:top-78  top-72 leading-[0.9] whitespace-nowrap bg-white  text-black text-center xl:text-[35vh] text-[15vh] font-bold'>World</h1>
      </div>
    </div>
  )
}

export default Texts
