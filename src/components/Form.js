import React, {useState} from 'react';


const Form = ({addTask}) => {
  const [value, setValue] = useState('')
  const handleChange = ({target: {value}}) => {
    setValue(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) {
      alert('Hi there! type something!!pls~')
    } else {
      addTask(value)
      setValue('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">What needs to be
          done?</label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleChange}
        value={value}/>
      <button
        type="submit"
        className="btn btn__primary btn__lg">Add
      </button>
    </form>
  );
};

export default Form;