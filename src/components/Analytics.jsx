import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
        <div className='flex flex-col justify-center max-md:items-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quasi amet eligendi nisi, sunt debitis, odio id, ea
            similique iure numquam voluptates suscipit sed. Sint voluptas
            recusandae adipisci quo nihil?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
