import { useState } from 'react'
import './App.css'



function App() {
  const [title,setTitle] = useState('')
  const [des,setDes] = useState('')
  const [task, setTask] = useState([])
 var id=1;
  function add(title,des)
  {
    const arr = [...task,{Id:id++,Title:title,Des:des,done:false}]
    setTask(arr);
  }

  

  return (
    <>
    <h1>Task Management App</h1>
    <label>
    <input type='text'
    name='title'
     //value={title}
    onChange={e=>setTitle(e.target.value)}
    />
    <input type="text" 
    //value={des}
    name='description'
    onChange={e=>setDes(e.target.value)}/>
    <button onClick={()=>
      {
        add(title,des);
        setTitle('');
        setDes('');
        }
        }>Add</button>
    </label>
    <ul>
    {task.map(artist => (
      <>
          <li key={artist.Id}><b>Title:</b>{artist.Id}{artist.Title}{""}
          Description:{artist.Des}</li>
          <button onClick={(()=>{
            edit(artist.Id,artist.Title,artist.Des)
          })}>edit</button>
          <button>delete</button>
          </>
        ))}
    </ul>
    
    </>  
  );
}

export default App
