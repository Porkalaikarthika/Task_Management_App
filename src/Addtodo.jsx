import { useState } from "react";
export default function Addtodo({ handleClick, handleChange, task, handleClear }) {

  return (
    <>
      <label>
        <input className="addItem"
          type="text"
          name="Title"
          placeholder='Enter title'
          value={task.Title}
          onChange={handleChange}
        />
      </label>
      <label>
        <input className="addItem"
          type="text"
          name="Des"
          placeholder='Enter description'
          value={task.Des}
          onChange={handleChange} />
      </label><br /><br />
      <button onClick={() => {
        handleClear();
        handleClick(task.Title, task.Des);
      }}>Add</button>
    </>
  )
}