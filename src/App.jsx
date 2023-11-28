import { useState } from 'react'
import './App.css'
import Addtodo from './Addtodo'



// export default function App() {
 
//   const [task, setTask] = useState([{Id:1,Title:"",Des:"",done:false

//   }])
//  var id=1;
//   function add(title,des)
//   {
   
//     setTask(  [...task,{Id:id++,Title:title,Des:des,done:false}]);
//   }

  

//   return (
//     <>
//     <h1>Task Management App</h1>
//     <label>
//     <input type='text'
//     name='title'
//      //value={title}
//     onChange={e=>setTitle(e.target.value)}
//     />
//     <input type="text" 
//     //value={des}
//     name='description'
//     onChange={e=>setDes(e.target.value)}/>
//     <button onClick={()=>
//       {
//         add(title,des);
//         setTitle('');
//         setDes('');
//         }
//         }>Add</button>
//     </label>
//     <ul>
//     {task.map(artist => (
//       <>
//           <li key={artist.Id}><b>Title:</b>{artist.Id}{artist.Title}{""}
//           Description:{artist.Des}</li>
//           <button onClick={(()=>{
//             edit(artist.Id,artist.Title,artist.Des)
//           })}>edit</button>
//           <button>delete</button>
//           </>
//         ))}
//     </ul>
    
//     </>  
//   );
// }


export default function App(){
//   const [tasklist,setTasklist]=useState([{
//     id:0,Title:"read a book",Des:"daily read 10 pages on the book",done:true
//   },
// {id:1,Title:"read a book",Des:"daily read 10 pages on the book",done:true},
// {id:2,Title:"read a book",Des:"daily read 10 pages on the book",done:true}])
  
 

  return (
    <>
    <h1>Task Management App</h1>
    <Addtodo/>
    </>
  )
}