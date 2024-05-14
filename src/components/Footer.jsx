import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { solutions, support, company, legal } from "../constant";

const Footer = () => {
  return (
    <footer className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#c1e8ff]'>REACT.</h1>
        <p className='py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor,
          aliquam consectetur repellendus minima necessitatibus mollitia neque
          ducimus, harum aliquid sapiente.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaFacebookSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            {solutions.map((link) => (
              <li className='py-2 text-sm'>{link.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            {support.map((link) => (
              <li>{link.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            {company.map((link) => (
              <li>{link.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            {legal.map((link) => (
              <li>{link.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
