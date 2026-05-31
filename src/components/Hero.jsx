import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1>
          Hi, I'm <span className="text-purple-600">Sahil Mehra</span>
        </h1>
        <h2 className="">Full Stack Developer</h2>
      </div>
    </div>
  );
};

export default Hero;
