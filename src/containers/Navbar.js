import React from 'react';
import MenuItem from '../components/MenuItem';
import './styles.css';

function Navbar({ config, onMenuItemClick }) {
  return (
    <div className="navbar-root-container">
      {config.map((menu) => (
        <MenuItem key={menu.key} icon={menu.icon} name={menu.name} />
      ))}
    </div>
  );
}

export default Navbar;
