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
        className={`card flex flex-col items-center gap-4 m-4 p-6 w-80 h-auto min-w-80 max-w-md rounded-lg shadow-md transition-all duration-400 ${
          isHovered ? 'border-2 border-blue-500 bg-blue-100 text-blue-900' : 'border-2 border-teesaBlueLight bg-teesaWhite'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="imageArea flex justify-center items-center w-full h-40">
          <img className="w-40 h-40 object-cover rounded-full" src={image} alt={name} />
        </div>
        <div className={`infoArea flex-grow text-center ${isHovered ? 'text-blue-900' : 'text-teesaBlueDark'}`}>
          <h2 className="font-bold text-teesaBlueDark">{name}</h2>
          <p className="text-sm text-teesaGreen">{role}</p>
        </div>
        {isHovered && (
          <>
            <div className={`infoArea ${isHovered ? 'text-blue-900' : 'text-teesaBlueDark'}`}>
              <ul className="datos flex flex-col items-center gap-2">
                <li>{country}</li>
              </ul>
            </div>
            <div className={`datos flex gap-4 ${isHovered ? 'text-blue-900' : 'text-teesaBlueDark'}`}>
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




