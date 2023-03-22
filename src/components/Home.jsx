import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className=" max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl md:text-7xl text-[#ccd6f6]">Meghanath V</h1>
        <h2 className="text-4xl md:text-7xl font-bold text-[#8892b0] ">
          I'm a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, beatae
          provident. Voluptatem vero expedita unde perferendis? Labore, officiis
          dolorem animi neque.
        </p>
        <div>
          <button className=" text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
