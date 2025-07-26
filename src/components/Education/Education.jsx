import React from 'react'
import { education } from '../../constants'

const Education = () => {
  
   return (
   <section
  id="education"
  className="py-24 px-[6vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
>
  {/* Section Title */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
    <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
    <p className="text-gray-400 mt-4 text-lg font-semibold">
      My education has been a journey of learning and development. Here are the details of my academic background.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative">
    {/* Vertical Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

    {/* Timeline Items */}
    {education.map((edu, index) => (
      <div
        key={edu.id}
        className="relative mb-20 flex flex-col sm:flex-row items-center"
      >
        {/* Timeline Dot (on center line) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-400 border-4 border-[#8245ec] rounded-full z-10 flex items-center justify-center">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Content Box */}
        <div
          className={`
            relative sm:w-[42%] w-full p-6 sm:p-6 mt-16 rounded-xl bg-gray-900 border border-white backdrop-blur-md shadow-xl 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 z-10
            ${index % 2 === 0 ? "sm:mr-auto sm:ml-0 text-left" : "sm:ml-auto sm:mr-0 text-left"}
          `}
        >
          <div className="flex items-center space-x-4">
            {/* Box Image */}
            <div className="w-20 h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Info */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <h4 className="text-sm text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
          <p className="mt-2 text-gray-400 text-sm">{edu.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>




  )
}

export default Education
