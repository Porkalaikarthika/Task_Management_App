import { useState } from "react"
export default function Display({tasklist,handleDelete,handleTask,handleChange}){
  const [edit,setEdit]=useState(false)
  function HandleEdit({id}){
    let currentTask=tasklist.find((task)=>task.id===id)
     
      return(
       
        <>
        
        <input type="text"
        name='Title'
        value={currentTask.Title} 
        onChange={(e)=>handleTask(e,currentTask.id)}/>
        <input type="text" 
        name='Des'
        value={currentTask.Des}
        onChange={(e)=>handleTask(e,currentTask.id)}/>
        <button onClick={()=>{setEdit(false)
        }}>save</button>
        </>
      )
      
      // else{
      //   return(
      //     <>
      //     <span><b>Title:</b>{task.Title} </span> 
      //     {task.Des&&<span><b>Description:</b> {task.Des}</span>}</>
      //   )
      // }
    
    
  
   }
   

    return(<>
     <ul>
      {tasklist.map((task)=>(task.Title&&<li key={task.id}>
        <input type="checkbox" name="done" checked={task.done}
         onChange={(e)=>handleTask(e,task.id)} />
        {edit?<HandleEdit id={task.id}/>:<>
          <span><b>Title:</b>{task.Title} </span> 
         {task.Des&&<span><b>Description:</b> {task.Des}</span>}</>}
        <button onClick={()=>setEdit(true)}>Edit</button>
       
        <button onClick={()=>handleDelete(task.id)}>Delete</button>
        
        </li>))}
    </ul></>)
}
{/* <input
  type="checkbox"
  name="done"
  checked={task.done}
  onChange={(e) => handleTask(e, task.id)}
/> */}
