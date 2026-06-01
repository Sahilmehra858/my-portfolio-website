import React from "react";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:text-left ml-0 md:ml-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple-600">Sahil Mehra</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-purple-700 font-medium px-6 py-3 rounded-lg hover:bg-purple-900 transition-all"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-purple-800/20 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* right side content */}
        <div className="md:w-1/2 flex justify-center">
          <img src="./src/assets/my-pic.jpeg" alt="profile-image" className="w-80 rounded-full shadow-purple-600 shadow-xl "/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
