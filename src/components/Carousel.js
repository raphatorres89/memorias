import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Carousel({ images }) {
  useEffect(() => {
    var elem = document.querySelector('.carousel');
    M.Carousel.init(elem, { duration: 200, dist: 0 });
  }, []);

  return (
    <div className="carousel">
      {images.map(({ src, ano }) => (
        <a key={ano} className="carousel-item" href="!#">
          <img src={src} alt={ano} />
        </a>
      ))}
    </div>
  );
}
