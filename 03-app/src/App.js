import { useState } from 'react'; 
import './App.css';

export default function App() {

  // const [count,setCount] = useState(0);
  // function handlePlus(){
  //   setCount(count+1);
  // }
  // function handleMinus(){
  //   setCount(count-1);
  // }
  // return (
  //  <>
  //   <h1>Explore UseState  as Counter</h1>
  //   <div className="box">
  //     <p>{count}</p>
  //     <button onClick={handlePlus} className="plus">+1</button>
  //     <button onClick={handleMinus} className="minus">-1</button>
  //   </div>
  //  </>
  // );
  const [tasks, setTasks] = useState([
    {id:1201, name:'Academic'},
    {id:1202, name:'Development'},
    {id:1203, name:'Problem Solving'}
  ]);

  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id));
  }

  return(
    <>
      <h1>Explore useState Array State value</h1>
      <ul>
        {tasks.map((task)=>(
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button onClick={()=>handleDelete(task.id)} className='delete'>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

