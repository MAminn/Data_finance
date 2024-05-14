import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800] h-screen mt-[-96px] w-full mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-[#c1e8ff] font-bold p-2 tracking-wide'>
          growing with data analytics
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:p-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center py-4'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            Fast, flexible financing for
          </p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increase your revenue for BTB, BTC,
          SASS platforms.
        </p>
        <button className='bg-[#c1e8ff] hover:bg-[#7da0ca] hover:scale-110 duration-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero