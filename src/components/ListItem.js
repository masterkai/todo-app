import React from 'react';

const ListItem = ({id, value, checked}) => {
  return (
    <div className="stack-small">
      <div className="c-cb">
        <input id={`todo-${id}`} type="checkbox" checked={checked}/>
        <label
          className="todo-label"
          htmlFor={`todo-${id}`}>{value}</label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">Edit <span className="visually-hidden">{value}</span></button>
        <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">{value}</span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;