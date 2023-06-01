import React from 'react';
import AboutDevCard from '../AboutDevCard/AboutDevCard';
import FaLinkedin from "../../assets/LinkedIn_icon.svg.png"
import FaGithub from "../../assets/images.png"
import developers from "../../developersData";

const About = () => {
  return (
    <div className="bg-white text-black">
      <h1 className="text-3xl font-bold text-center mt-8">Acerca de los desarrolladores Web</h1>
      <p className="text-center mt-4">
        7 web developers que se unieron para desarrollar este proyecto de Colombia, uniendo los conocimientos de Base de Datos, Back-End y 
        Front-End agregándole herramientas de diseño UX/UI para una mejor navegación de manera intuitiva.
      </p>
      <hr className="border-black-600" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 md:col-span-4">
          <div className="flex justify-center">
            {developers.slice(0, 4).map((developer) => (
              <AboutDevCard
                key={developer.name}
                name={developer.name}
                country={developer.country}
                linkedin={developer.linkedin}
                github={developer.github}
                image={developer.img ? developer.img : developer.image}
              />
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-4 flex justify-center">
          {developers.slice(4, 7).map((developer) => (
            <AboutDevCard
              key={developer.name}
              name={developer.name}
              country={developer.country}
              linkedin={developer.linkedin}
              github={developer.github}
              image={developer.img ? developer.img : developer.image}
            />
          ))}
        </div>
      </div>
      <p className="text-center mt-4 text-black-800">
        Haznos saber si deseas obtener más información sobre nuestro personal y su formación profesional.
      </p>
      <footer className="flex items-center justify-center bg-gray-200 py-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 mx-2">
          <img src={FaLinkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 mx-2">
          <img src={FaGithub} alt="GitHub" className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
};

export default About;

