import React from 'react';

export default function Slider({ images }) {
  return (
    <div>
      <div className="slider">
        <ul className="slides">
          {images.map(({ src, ano, texto }) => (
            <li key={ano}>
              <img src={src} alt={ano} />
              <div className="caption center-align">
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
