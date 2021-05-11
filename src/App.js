import './App.scss'
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
  const [tabButtons, setTabButtons] = useState([
    {name: 'All', active: true},
    {name: 'Active', active: false},
    {name: 'Completed', active: false},
  ])
  const handleTabsClick = (index) => {
    const newTabButtons = [...tabButtons]
    newTabButtons.forEach(tab => tab.active = false)
    newTabButtons[index]["active"] = true;
    setTabButtons(newTabButtons)
  }
  return (
    <div className="App">
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">What needs to be
            done?</label></h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value=""/>
        <button type="submit" className="btn btn__primary btn__lg">Add</button>
      </form>
      <div className="filters btn-group stack-exception">
        {tabButtons.map((b,i) => <TabButton key={b.name} index={i} name={b.name} active={b.active} handleTabsClick={handleTabsClick}/>)}
      </div>
      <h2 id="list-heading" tabIndex="-1">0 tasks remaining</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">

      </ul>
    </div>
  )
}

export default App;
