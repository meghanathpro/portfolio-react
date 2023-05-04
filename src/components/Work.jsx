import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" py-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className=" py-6">|| Check out some of my recent works</p>
        </div>

        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className=" grid md:grid-cols-2 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span></span>
              <div>
                <a href="a">
                  <button></button>
                </a>
                <a href="a">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
