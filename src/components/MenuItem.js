import React from 'react';

function MenuItem({ icon = '', name, onMenuItemClick }) {
  const handleMenuItemClick = () => {
    onMenuItemClick && onMenuItemClick(name);
  };

  return (
    <div className="menu-item-container" onClick={handleMenuItemClick}>
      <div>
        <i className={'menu-icon ' + icon}></i>
        <span>{name}</span>
      </div>
      <i className={'menu-icon bi-caret-right'}></i>
    </div>
  );
}

export default MenuItem;
