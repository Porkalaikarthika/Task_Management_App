import { useState } from 'react'
import './App.css'
import Addtodo from './Addtodo'






export default function App(){
  const [tasklist,setTasklist]=useState([{
    id:1,Title:"read a book",Des:"daily read 10 pages on the book",done:true
  },
{id:2,Title:"read a book",Des:"daily read 10 pages on the book",done:true},
{id:3,Title:"read a book",Des:"daily read 10 pages on the book",done:true}])
  
 function handleClick(title,des){
  setTasklist(pre=>{
    return [...pre,{id:pre.length+1,Title:title,Des:des,done:false}]
  })
}
 function handleTask(e,id){
      const {name,checked,type,value}=e.target;
      setTasklist((tasks)=>tasks.map((task)=>
        id===task.id?{...task,[name]:type=='checkbox'?checked:value}:task)
      )
 }

 

  return (
    <>
    <h1>Task Management App</h1>
    <Addtodo handleClick={handleClick}/>
    <ul>
      {tasklist.map((task)=>(<li key={task.id}>
        <input type="checkbox" name="done" checked={task.done}
         onChange={(e)=>handleTask(e,task.id)} />
        Title:{task.Title} Description:{task.Des}
        <button >Edit</button>
        <button >Delete</button></li>))}
    </ul>
    </>
  )
}