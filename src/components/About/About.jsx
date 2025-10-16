import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16"

    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greetings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vanisha Kandhway
          </h2>
          {/* Skills Heading with Typing Effect */}
        
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec] font-semibold">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Frontend Developer",
                  // "UI/UX Designer",
                  "Coder",
                  "Problem -Solver",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a full-stack developer with experience in building scalable web applications using the MERN stack. With strong frontend skills and a good grasp of DSA, I’m eager to apply my knowledge through an internship and contribute to real-world projects.</p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1sgSW5M-JUVoCIOh-D-IFRjeMzHH1V-5v/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
{/* Right Side */}
<div className="md:w-1/2 flex justify-center md:justify-end -mt-10 overflow-visible">
  <Tilt
    className="w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 border-4 border-purple-700 rounded-full"
    style={{ transform: 'translateX(30px) translateY(-50px)' }}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={true}
  >
    <img
      src={profileImage}
      alt="Vanisha Kandhway"
      className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
    />
  </Tilt>
</div>










      </div>
    </section>
  );
};

export default About;
