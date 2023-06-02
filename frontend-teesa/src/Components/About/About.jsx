import React from 'react';
import AboutDevCard from '../AboutDevCard/AboutDevCard';
import FaLinkedin from "../../assets/LinkedIn_icon.svg.png"
import FaGithub from "../../assets/images.png"
import developers from "../../developersData";

const About = () => {
  return (
    <div className="bg-white text-black">
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-blue-900">Conoce al equipo de Desarrollo Web</h1>
      <div className="mx-auto max-w-3xl">
        <hr className="border-t border-blue-900 my-4" />
        <p className="text-lg text-center mb-4 text-blue-900">
          Somos un equipo de 7 web developers provenientes de Colombia y Argentina unidos para desarrollar este proyecto, combinando nuestros conocimientos en bases de datos, back-end y front-end, y aplicando herramientas de diseño UX/UI para ofrecer una experiencia de navegación intuitiva.
        </p>
        <hr className="border-t border-blue-900 my-4" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 md:col-span-4">
          <div className="flex justify-center">
            {developers.slice(0, 4).map((developer) => (
              <AboutDevCard
                key={developer.name}
                name={developer.name}
                country={developer.country}
                role={developer.role}
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
              role={developer.role}
              linkedin={developer.linkedin}
              github={developer.github}
              image={developer.img ? developer.img : developer.image}
            />
          ))}
        </div>
      </div>
      <p className="text-center mt-4 text-blue-900">
        Si deseas obtener más información sobre nuestro personal y su formación profesional, ¡háznoslo saber!
      </p>
      <footer className="flex items-center justify-center bg-gray-200 py-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-900 mx-2">
          <img src={FaLinkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-900 mx-2">
          <img src={FaGithub} alt="GitHub" className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
};

export default About;

