import React from 'react'

const Texts = () => {
  return (
    <div className='absolute top-0  h-full  w-full '>
      <div className='relative textWrapper  z-5  h-full uppercase w-full'>
        <h1 className='text1 text absolute leading-[0.9] left-93 top-58 whitespace-nowrap bg-white  text-black  text-center text-[35vh] font-bold'> World </h1>
        <h1 className='text middle absolute z-1 left-93  leading-[0.9] top-58 whitespace-nowrap  bg-white  text-black text-center text-[35vh] font-bold'> World </h1>
        <h1 className='text2 text absolute left-93  top-58 leading-[0.9] whitespace-nowrap bg-white  text-black text-center text-[35vh] font-bold'> World</h1>
      </div>
    </div>
  )
}

export default Texts
