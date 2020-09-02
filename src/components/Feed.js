import React from 'react';
import Slider from './Slider';
import Paralax from './Parallax';
import Toast from './Toast';

export default function Feed() {
  const sliderImages = [
    { src: './images/1.jpg', ano: 2014, texto: 'A gente de aparelho :D' },
    { src: './images/2.jpg', ano: 2015, texto: 'A gente de óculos 8D' },
    { src: './images/3.jpg', ano: 2016, texto: 'A gente de biquinho :*' },
    { src: './images/4.jpg', ano: 2017, texto: 'A gente bonitinho :)' },
  ];

  const paralaxImages = {
    first: './images/5.jpg',
    second: './images/6.jpg',
  };

  return (
    <div>
      <Slider images={sliderImages} />
      <Paralax images={paralaxImages} />
      <div style={{ padding: 20 }} />
      <Toast
        label={'Clique em mim :D'}
        text={'Não esquece que todo dia 15 é nosso dia <3'}
      />
      <p>Ainda estou construindo :D</p>
    </div>
  );
}
