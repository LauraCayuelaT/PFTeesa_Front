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
        className={`card flex flex-col items-center gap-4 m-4 p-6 w-72 h-auto min-w-72 max-w-md rounded-lg shadow-md transition-all duration-400 ${
          isHovered ? 'bg-blue-900 text-white' : 'bg-gray-300'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="imageArea flex justify-center items-center w-full h-36">
          <img
            className="w-28 h-28 rounded-full"
            src={image}
            alt={name}
          />
        </div>
        <div className={`infoArea flex-grow text-center ${isHovered ? 'text-white' : 'text-black'}`}>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-sm">{role}</p>
        </div>
        {isHovered && (
          <>
            <div className={`infoArea ${isHovered ? 'text-white' : 'text-black'}`}>
              <ul className="datos flex flex-col items-center gap-2">
                <li>{country}</li>
              </ul>
            </div>
            <div className={`datos flex gap-4 ${isHovered ? 'text-white' : 'text-black'}`}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutDevCard;



