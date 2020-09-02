import React, { useEffect } from 'react';
import './parallax.module.css';
import M from 'materialize-css';

export default function Paralax({ images }) {
  useEffect(() => {
    var elem = document.querySelectorAll('.parallax');
    M.Parallax.init(elem, { height: 300 });
  }, []);

  const { first, second } = images;

  return (
    <div>
      <div className="section white">
        <div className="row container">
          <h4 className="header">Parceirona de chimas</h4>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={second} alt={second} style={{ maxWidth: 600 }} />
        </div>
      </div>

      <div className="section white">
        <div className="row container">
          <h4 className="header">Parceirona de ceva</h4>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={first} alt={first} style={{ maxWidth: 980 }} />
        </div>
      </div>
    </div>
  );
}
