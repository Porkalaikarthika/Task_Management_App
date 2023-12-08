import { useState } from "react"
export default function Display({ tasklist, handleDelete, handleTask }) {
  const [edit, setEdit] = useState(null)


  function HandleEdit({ currentTask }) {


    return (

      <>
        <input
          type="text"
          name="Title"
          value={currentTask.Title}
          onChange={(e) => handleTask(e, currentTask.id)}
        />
        <input
          type="text"
          name="Des"
          value={currentTask.Des}
          onChange={(e) => handleTask(e, currentTask.id)}
        />
        <button
          onClick={() => {
            setEdit(null);
          }}
        >
          Save
        </button>
      </>
    );



  }


  return (<>
    <ul>
      {tasklist.map((task) => (task.Title && <li key={task.id}>
        <input type="checkbox" name="done" checked={task.done}
          onChange={(e) => handleTask(e, task.id)} />


        {edit === task.id ? (<HandleEdit currentTask={task} />) : (<>
          <span><b>Title:</b>{task.Title} </span>
          {task.Des && <span><b>Description:</b> {task.Des}</span>}
          <button onClick={() => setEdit(task.id)}>Edit</button>
        </>)}


        <button onClick={() => handleDelete(task.id)}>Delete</button>

      </li>))}
    </ul></>)
}



