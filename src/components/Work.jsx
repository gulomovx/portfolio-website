import React from "react";
import { data } from "../data/data.js";
import comfy from "../assets/projects/comfy.png";

import micro from "../assets/projects/micro.png";
import CSS from "../assets/css.png";
import birthday from "../assets/projects/birthday.png";
import crud from "../assets/projects/crud.png";
import country from "../assets/projects/countries.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/projects/bootstrap.png";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="skills"
      className="w-full h-scree pt-32 bg-slate-950 text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wider ">
            Projects
          </p>
          <p className="py-4 text-2xl font-mono">
            {" "}
            These are the projects I created
          </p>
        </div>
        {/*  */}
        {/* <figure className="relative hover:shadow-white hover:scale-105  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="https://iridescent-torte-9c1f1f.netlify.app/">
            <img className="rounded-lg " src={comfy} alt="image description" />
          </a>
          <figcaption className="absolute  px-4 text-2xl rounded text-white bottom-6 bg-slate-300  ">
            <p className=" ">
              Comfy store App
            </p>
          </figcaption>
        </figure> */}
        {/*  */}

        <div className="w-full grid grid-cols sm:grid-cols-4 md:grid-cols-3   gap-4 text-center py-8">
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 hover:shadow-white">
            <img className="w-72   mx-auto" src={country} alt="HTML icon" />
            <a href="https://data-country-app.netlify.app/">Countries</a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 hover:shadow-white ">
            <img className="w-72 h-44 mx-auto" src={comfy} alt="HTML icon" />
            <a href="https://iridescent-torte-9c1f1f.netlify.app/">Comfy</a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 hover:shadow-white">
            <img
              className="w-72 h-[90px] mx-auto"
              src={micro}
              alt="HTML icon"
            />
            <a href="https://dynamic-lily-439366.netlify.app/">
              Microsoft clone
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 hover:shadow-white">
            <img className="w-64 mx-auto" src={birthday} alt="HTML icon" />
            <a href="https://xurshidbek-birthday.netlify.app/">Birthday App</a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 hover:shadow-white">
            <img
              className="w-72  h-[100px] mx-auto object-cover"
              src={crud}
              alt="HTML icon"
            />
            <a href="https://crud-list-app.netlify.app/">Crud App</a>
          </div> */}

          {/*  */}
          <figure className="relative hover:shadow-white hover:scale-105  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="https://iridescent-torte-9c1f1f.netlify.app/">
              <img
                className="rounded-lg "
                src={comfy}
                alt="image description"
              />
            </a>
            <figcaption className="absolute  px-4 text-2xl rounded text-white bottom-6 bg-slate-300  ">
              {/* <p className=" ">Comfy store App</p> */}
            </figcaption>
                  </figure>
                  
          <figure className="relative hover:shadow-white hover:scale-105  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="https://dynamic-lily-439366.netlify.app/">
              <img
                className="rounded-lg "
                src={micro}
                alt="image description"
              />
            </a>
            <figcaption className="absolute  px-4 text-2xl rounded text-white bottom-6 bg-slate-300  ">
              {/* <p className=" ">Microsoft clone</p> */}
            </figcaption>
          </figure>
          <figure className="relative hover:shadow-white hover:scale-105  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="https://crud-list-app.netlify.app/">
              <img
                className="rounded-lg h-40 object-cover"
                src={crud}
                alt="image description"
              />
            </a>
            <figcaption className="absolute  px-4 text-2xl rounded text-white bottom-6 bg-slate-300  ">
              {/* <p className=" ">Crud list</p> */}
            </figcaption>
          </figure>
          <figure className="relative hover:shadow-white hover:scale-105  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="https://xurshidbek-birthday.netlify.app/">
              <img
                className="rounded-lg object-cover h-44 "
                src={birthday}
                alt="image description"
              />
            </a>
            <figcaption className="absolute  px-4 text-2xl rounded text-white bottom-6 bg-slate-300  ">
              {/* <p className=" ">Comfy store App</p> */}
            </figcaption>
          </figure>
          <figure className="relative hover:shadow-white hover:scale-105  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="https://data-country-app.netlify.app/">
              <img
                className="rounded-lg object-cover h-44 w-full"
                src={country}
                alt="image description"
              />
            </a>
            <figcaption className="absolute  px-4 text-2xl rounded text-white bottom-6 bg-slate-300  ">
              {/* <p className=" ">Comfy store App</p> */}
            </figcaption>
          </figure>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Work;
