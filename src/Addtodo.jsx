import { useState } from "react";
export default function Addtodo({handleClick}){

    const [task,setTask]=useState({
        Title:"",Des:""
      })
      function handleChange(e){
        const {name,value}=e.target
        setTask(pretask=>{
         return ({...pretask,[name]:value})
        })
        
     }
      return(
        <><label>
        <input 
        type="text" 
        name="Title"
        placeholder='Enter title'
        value={task.Title}
        onChange={handleChange}
        />
      </label>
      <label>
        <input type="text" 
        name="Des"
        placeholder='Enter description'
        value={task.Des}
        onChange={handleChange}/>
      </label><br /><br />
      <button onClick={()=>handleClick(task.Title,task.Des)}>Add</button>
      <span><b>Title:</b> {task.Title}</span>
      <span>       <b>Description:</b>{task.Des}</span>
        </>
      )
}