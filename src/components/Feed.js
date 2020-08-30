import React from 'react';
import Carousel from './Carousel';

export default function Feed() {
  const carouselImgs = [
    { src: './images/1.jpg', alt: 2014 },
    { src: './images/2.jpg', alt: 2015 },
    { src: './images/3.jpg', alt: 2016 },
    { src: './images/4.jpg', alt: 2017 },
  ];

  return (
    <div>
      <Carousel images={carouselImgs} />
      <p>Ainda estou construindo :D</p>
    </div>
  );
}
