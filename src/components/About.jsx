import React from "react";
import aboutImage from "../assets/about-image.jpeg";
import { FaLightbulb } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-xl md:text-xl font-semibold text-gray-400 mb-16">
          Get to know more about my background and passion.
        </p>
        {/* image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <img
              src={aboutImage}
              alt="about-image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* text-content */}
          <div className="md:w-1/2">
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl font-semibold mb-6 text-left">
                My Journey
              </h3>
              <p className="text-lg text-gray-300 mb-6 text-left">
                I am a passionate Full Stack Developer with a strong interest in
                building modern, responsive, and user-friendly web applications.
                I have experience working with HTML, CSS, JavaScript, React.js,
                Node.js, Express.js, MongoDB, and WordPress. I enjoy turning
                ideas into functional digital solutions while continuously
                learning new technologies and improving my development skills.
              </p>
              <p className="text-lg text-gray-300 mb-12 text-left">
                As a dedicated and motivated developer, I focus on writing
                clean, efficient, and scalable code. I am always eager to take
                on new challenges, contribute to innovative projects, and grow
                professionally in the ever-evolving world of web development. My
                goal is to create impactful web experiences that deliver real
                value to users and businesses.
              </p>
              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <FaLightbulb className="text-3xl mb-2 text-purple-600" />
                  <h3 className="text-2xl font-bold mb-2">Innovative</h3>
                  <p>
                    I love creating unique solutions to complex problems with
                    cutting-edge technologies
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <HiPaintBrush className="text-3xl mb-2 text-purple-600" />

                  <h3 className="text-2xl font-bold mb-2">Design Oriented</h3>
                  <p>
                    Beautiful design and user experience are at the heart of
                    everything i create.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <FaCode className="text-3xl mb-2 text-purple-600" />

                  <h3 className="text-2xl font-bold mb-2">Clean Code</h3>
                  <p>
                    I write maintainable, efficient code following best
                    practices and modern patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
