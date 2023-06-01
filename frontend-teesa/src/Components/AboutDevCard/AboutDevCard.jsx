import React, { useState } from 'react';

const AboutDevCard = ({ name, country, role, linkedin, github, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div
        className="card flex flex-col items-center gap-4 m-4 p-6 w-64 h-auto min-w-64 max-w-md rounded-lg shadow-md bg-gray-200 bg-opacity-50 hover:bg-blue-400 hover:text-white hover:scale-125 hover:border-blue-700 transition-all duration-400"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`first-content ${isHovered ? 'opacity-0' : 'opacity-1'} flex flex-col justify-center items-center w-full h-full`}>
  <div className="imageArea flex justify-center items-center w-full h-full">
    <img className="w-40 h-40 rounded-full" src={image} alt={name} />
  </div>
  <div className="titleArea w-full">
    <h2 className="font-bold text-xl text-center text-blue-700">{name}</h2>
  </div>
</div>

        <div className={`second-content ${isHovered ? 'opacity-1' : 'opacity-0'} flex flex-col justify-between h-full`}>
  <div className="infoArea text-black flex-grow">
    <ul className="datos flex flex-col items-center gap-2">
      <li>{country}</li>
      <li>Full Stack Developer</li>
    </ul>
  </div>
  <div className="datos flex gap-4">
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <a href={github} target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutDevCard;





