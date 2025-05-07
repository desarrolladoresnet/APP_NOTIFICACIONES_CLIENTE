import React from 'react';
import { usePagesStore } from "../../zustand";
import './navbar.css';

export const Navbar: React.FC = () => {
  // Usamos el pageStore para la navegación
  const { home, bdv, bancaribe, pageSelection } = usePagesStore();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button 
              className={`nav-button home-btn ${home ? 'active' : ''}`}
              onClick={() => pageSelection('home')}
            >
              <span className="icon">🏠</span>
              <span className="text">Home</span>
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-button bdv-btn ${bdv ? 'active' : ''}`}
              onClick={() => pageSelection('bdv')}
            >
              <span className="icon">🏦</span>
              <span className="text">BDV</span>
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-button bancaribe-btn ${bancaribe ? 'active' : ''}`}
              onClick={() => pageSelection('bancaribe')}
            >
              <span className="icon">🏦</span>
              <span className="text">Bancaribe</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
