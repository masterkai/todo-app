import React from 'react';

const TabButton = ({name, active, index, handleTabsClick}) => {
  return (
    <button
      onClick={()=>handleTabsClick(index)}
      type="button"
      className="btn toggle-btn"
      aria-pressed={active}>
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default TabButton;