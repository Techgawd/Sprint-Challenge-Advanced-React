import React from "react";
import useDarkMode  from '../hooks/useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar">
       <h1>Womens World Cup Players</h1>
        <div className="dark-mode__toggle">
          <div
          data-testid='darkmode'
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
  
      </nav>
    );
  };

export default NavBar;
