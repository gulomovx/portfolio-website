import React from 'react';
import { data } from "../data/data.js";
import comfy from '../assets/projects/comfy.png'

import micro from '../assets/projects/micro.png';
import CSS from '../assets/css.png';
import birthday from '../assets/projects/birthday.png';
import crud from '../assets/projects/crud.png';
import country from '../assets/projects/countries.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/projects/bootstrap.png';

const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 tracking-wider '>Projects</p>
              <p className='py-4 text-2xl font-mono'> These are the projects I created</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3   gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-64 mx-auto' src={country} alt="HTML icon" />
                  <a href="https://data-country-app.netlify.app/">Countries</a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-72 mx-auto' src={comfy} alt="HTML icon" />
                  <a href="https://iridescent-torte-9c1f1f.netlify.app/">Comfy</a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-72 mx-auto' src={micro} alt="HTML icon" />
                  <a href="https://dynamic-lily-439366.netlify.app/">Microsoft clone</a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-64 mx-auto' src={birthday} alt="HTML icon" />
                  <a href="https://xurshidbek-birthday.netlify.app/">Birthday App</a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-72 h-[170px] mx-auto object-cover' src={crud} alt="HTML icon" />
                  <a href="https://crud-list-app.netlify.app/">Crud App</a>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>Bootstrap</p>
              </div> */}
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div> */}
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div> */}
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Work;
