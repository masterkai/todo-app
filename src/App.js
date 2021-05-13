import './App.scss'
import FilterButton from "./components/FilterButton";
import React, {useState, useRef, useEffect} from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form"
import {nanoid} from "nanoid";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value
  })
}

function App({tasks}) {
  const [lists, setLists] = useState(tasks)
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedLists = lists.map(list => {
      if (id === list.id) {
        return {...list, completed: !list.completed};
      }
      return list
    })
    setLists(updatedLists)
  }

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);


  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = lists.filter(FILTER_MAP[filter]).map(item => <ListItem
    key={item.id}
    id={item.id}
    value={item.value}
    completed={item.completed}
    handleDelete={handleDelete}
    toggleTaskCompleted={toggleTaskCompleted}
    editTask={editTask}
  />)

  const addTask = value => {
    const newLists = [...lists, {id: 'todo-' + nanoid(), value, completed: false}]
    setLists(newLists)
  }

  function handleDelete(id) {
    const newLists = lists.filter(list => list.id !== id)
    setLists(newLists)
  }

  function editTask(id, newValue) {
    const editedTask = lists.map(list =>{
      if(list.id === id){
        return {...list,value:newValue}
      }
      return list
    })
    setLists(editedTask)
  }

  const tasksNoun = lists.length !== 1 ? 'tasks' : 'task'
  const headingText = `${lists.length} ${tasksNoun} remaining`

  const listHeadingRef = useRef(null)
  const prevTaskLength = usePrevious(lists.length)

  useEffect(() => {
    if (lists.length - prevTaskLength === -1) {
      listHeadingRef.current.focus()
    }
  }, [lists.length, prevTaskLength])

  return (
    <div className="App">
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  )
}

export default App;
