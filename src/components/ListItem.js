import React from 'react';

const ListItem = () => {
  return (
    <div className="stack-small">
      <div className="c-cb">
        <input id="todo-5pvnScnsraaazWvhOSuS8" type="checkbox"/>
        <label
          className="todo-label"
          htmlFor="todo-5pvnScnsraaazWvhOSuS8">milk</label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">Edit <span className="visually-hidden">milk</span></button>
        <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">milk</span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;