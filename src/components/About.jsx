import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-5xl w-full px-4 grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className=" max-w-5xl w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold">
            <p>
              Hi, I'm Meghanath, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae non harum illum, fugit odio est earum eum eos
              reiciendis dolorem tempore unde hic sunt atque nam minus ipsa,
              quibusdam velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
