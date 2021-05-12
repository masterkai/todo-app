import React from 'react';

const ListItem = ({id, value, completed, handleDelete}) => {
  return (
    <div className="stack-small">
      <div className="c-cb">
        <input id={id} type="checkbox" checked={completed}/>
        <label
          className="todo-label"
          htmlFor={id}>{value}</label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">Edit <span className="visually-hidden">{value}</span></button>
        <button type="button"
                className="btn btn__danger"
                onClick={()=>handleDelete(id)}
        >Delete <span className="visually-hidden">{value}</span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;