import React, { useState } from 'react';
import './css/style.css';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="header">
      <div className="container">
        <div className="nav-box">
          <nav className={`nav ${showMenu ? 'hidden' : ''}`}>
            <ul className='nav-ul'>
              <li>
                <h2>Home</h2>
              </li>
              <li>
                <h2>About</h2>
              </li>
              <li>
                <h2>Contact</h2>
              </li>
              <li>
                <h2>FAQ</h2>
              </li>
            </ul>
          </nav>
          <div className="viewport">
              <ul className={`hambar-ul ${showMenu ? 'visible' : ''}`}>
                <li>
                  <h2>Home</h2>
                </li>
                <li>
                  <h2>About</h2>
                </li>
                <li>
                  <h2>Contact</h2>
                </li>
                <li>
                  <h2>FAQ</h2>
                </li>
              </ul>
              <button className='hamburger-menu' onClick={toggleMenu}>
                {showMenu ? (
                  <img src="./img/close.png" alt="close-img" />
                  ) : (
                  <img src="./img/ham_bar_purple.svg" alt="menu-img" />
                  )}
              </button>
            </div>
        </div>
      </div>
    </header>
  );
}
