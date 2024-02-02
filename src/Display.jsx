import { useState } from "react"
export default function Display({ tasklist, handleDelete, handleTask }) {
  const [edit, setEdit] = useState(null)




  return (<>
    <ul>
      {tasklist.map((task) => (task.Title && <li key={task.id} className={`task-item ${task.done ? 'checked' : ''}`}>
        <input
          type="checkbox"
          name="done"
          checked={task.done}
          onChange={(e) => handleTask(e, task.id)}
        />



        {edit === task.id ?
          <>
            <div className="editInput">
              <input
                className="input"
                type="text"
                name="Title"
                value={task.Title}
                onChange={(e) => handleTask(e, task.id)}
              />
              <input
                className="input"
                type="text"
                name="Des"
                value={task.Des}
                onChange={(e) => handleTask(e, task.id)}
              />
            </div>


            <div className="btnContainer">
              <button className="btn"
                onClick={() => {
                  setEdit(null);
                }}
              >
                ✔
              </button>
              <button className="btn" onClick={() => handleDelete(task.id)}>🗑</button>
            </div>
          </> :
          (<>
            <div>
              <span><b>{task.Title}: </b></span>
              {task.Des && <span> {task.Des}</span>}
            </div>
            <div className="btnContainer">
              <button className="btn" onClick={() => setEdit(task.id)}>✏</button>
              <button className="btn" onClick={() => handleDelete(task.id)}>🗑</button>
            </div>
          </>)
        }



      </li>))}
    </ul></>)
}



