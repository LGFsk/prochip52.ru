import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Section.css';
import '../styles/Modal.css';
import '../styles/Models.css';

const brands = [
  { name: 'Haval', logo: '/brands/haval.svg' },
  { name: 'Wey', logo: '/brands/wey.svg' },
  { name: 'TANK', logo: '/brands/tank.svg' },
  { name: 'Geely', logo: '/brands/geely.svg' },
  { name: 'GAC', logo: '/brands/gac.svg' },
  { name: 'Changan', logo: '/brands/changan.svg' },
  { name: 'Chery', logo: '/brands/chery.svg' },
  { name: 'Exeed', logo: '/brands/exeed.svg' },
  { name: 'Faw', logo: '/brands/faw.svg' },
  { name: 'Kaiyi', logo: '/brands/kaiyi.svg' },
  { name: 'Jaecoo', logo: '/brands/jaecoo.svg' },
  { name: 'Jetour', logo: '/brands/jetour.svg' },
  { name: 'Omoda', logo: '/brands/omoda.svg' },
  { name: 'Livan', logo: '/brands/livan.svg' },
  { name: 'Hongqi', logo: '/brands/hongqi.svg' },
  { name: 'GWM', logo: '/brands/gwm.svg' },
  { name: 'XCITE', logo: '/brands/xcite.svg' },
  { name: 'JAC', logo: '/brands/jac.svg' },
];

const Models = () => {
  return (
    <section id="models" className="section">
      <div className="container">
        <h2 className="models-title">Выберите марку авто для чип-тюнинга</h2>
        <div className="brand-grid">
          {brands.map((brand) => (
            <Link to={`/brand/${brand.name.toLowerCase()}`} key={brand.name} className="brand-card">
              <div className="brand-logo-wrapper">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
              <div className="brand-name">{brand.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
