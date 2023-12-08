import { useState } from 'react'
import './App.css'
import Addtodo from './Addtodo'
import Display from './Display'

export default function App(){
  const [tasklist,setTasklist]=useState([
{id:145,Title:"read a book",Des:"daily read 10 pages on the book",done:true},
{id:235,Title:"read a book",Des:"daily read 10 pages on the book",done:true},
{id:334,Title:"read a book",Des:"daily read 10 pages on the book",done:true}])


const [task,setTask]=useState({
  Title:"",Des:""
})
function handleClear(){
  setTask({Title:"", Des:""})
}
function handleChange(e){
  const {name,value}=e.target
  setTask(pretask=>{
  return({...pretask,[name]:value})
  })
}
  
 function handleClick(title,des)
{
  let ranId=Math.random().toString(36).substr(2, 9);
  console.log(ranId)
  setTasklist(pre=>{
    return [...pre,{id:ranId,Title:title,Des:des,done:false}]
    
  })
  console.log(tasklist)
}
//  function handleTask(e,id){
//       const {name,checked,type,value}=e.target;
//       setTasklist((tasks)=>tasks.map((task)=>
//         id===task.id?{...task,[name]:type==='checkbox'?checked:value}:task)
//       )
//  }
function handleTask(e, id) {
  const { name, checked, type, value } = e.target;
  setTasklist((tasks) =>
    tasks.map((task) =>
      id === task.id
        ? { ...task, [name]: type === 'checkbox' ? checked : value }
        : task
    )
  );
}
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setEditedTask((prev) => ({ ...prev, [name]: value }));
// };


 function handleDelete(id){
  setTasklist((tasks)=>tasks.filter((task)=>id!==task.id))
  console.log(tasklist)
 }
//  function handleDelete(id) {
//   setTasklist((tasks) => tasks.filter((task) => id !== task.id));
//   // Ensure that there are no subsequent state updates based on the deleted task ID.
// }


 

  return (
    <>
    <h1>Task Management App</h1>
    <Addtodo handleClick={handleClick} handleChange={handleChange} task={task}
    handleClear={handleClear}/>
    <Display tasklist={tasklist} handleTask={handleTask} 
    handleDelete={handleDelete} handleChange={handleChange}/>
   
    </>
  )
}