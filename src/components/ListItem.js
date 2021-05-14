import React, {useEffect, useRef, useState} from 'react';

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const ListItem = ({id, value, completed, handleDelete, toggleTaskCompleted, editTask}) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

  function handleChange({target: {value}}) {
    setNewName(value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) {
      return
    }
    editTask(id, newName)
    setNewName('')
    setEditing(false)
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label
          className="todo-label"
          htmlFor={id}>New name for {value}</label>
        <input
          id={id}
          className="todo-text"
          type="text"
          value={newName===''?'':newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">{value}</span>
        </button>
        <button type="submit"
                className="btn btn__primary todo-edit"
        >Save <span className="visually-hidden">{value}</span>
        </button>
      </div>
    </form>
  )

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label
          className="todo-label"
          htmlFor={id}>{value}</label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="btn"
          ref={editButtonRef}
        >
          Edit
          <span className="visually-hidden">{value}</span>
        </button>
        <button type="button"
                className="btn btn__danger"
                onClick={() => handleDelete(id)}
        >Delete <span className="visually-hidden">{value}</span>
        </button>
      </div>
    </div>
  )

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <div className='todo'>{isEditing ? editingTemplate : viewTemplate}</div>
  );
};

export default ListItem;