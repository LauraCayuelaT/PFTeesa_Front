import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';     
import {  useSelector } from 'react-redux';
                          
  const ImageCarousel = () => {
    const imagenes = useSelector((state) => state?.detailState?.productDetail.imagenes);
  return (
    <Carousel>
      {imagenes?.map((image, index) => (
        <div key={index}>
          <img  className="w-full h-auto object-cover rounded-lg" src={image} alt={`Imagen ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};
export default ImageCarousel;