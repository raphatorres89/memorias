import React from 'react';
import Carousel from './Carousel';
import Slider from './Slider';

export default function Feed() {
  const sliderImages = [
    { src: './images/1.jpg', ano: 2014, texto: '' },
    { src: './images/2.jpg', ano: 2015, texto: '' },
    { src: './images/3.jpg', ano: 2016, texto: '' },
    { src: './images/4.jpg', ano: 2017, texto: '' },
  ];

  return (
    <div>
      <Carousel images={sliderImages} />
      <Slider images={sliderImages} />
      <p>Ainda estou construindo :D</p>
    </div>
  );
}
