import React, { useState } from 'react'

const NewTasks = ({onAdd}) => {
  const [enteredTask, setEnteredTask] = useState()

  const handleChange = (event) => {
    setEnteredTask(event.target.value)
  }

  const handleClick=()=>{
    onAdd(enteredTask);
    setEnteredTask('')

  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add task</button>
    </div>
  )
}

export default NewTasks
