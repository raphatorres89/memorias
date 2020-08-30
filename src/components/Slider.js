import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Slider({ images }) {
  useEffect(() => {
    var elem = document.querySelector('.slider');
    M.Slider.init(elem, { height: 500 });
  }, []);

  return (
    <div>
      <div className="slider">
        <ul className="slides">
          {images.map(({ src, ano, texto }) => (
            <li key={ano}>
              <img src={src} alt={ano} />
              <div className="caption left-align">
                <h3>{ano}</h3>
                <h5 className="light grey-text text-lighten-3">{texto}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
