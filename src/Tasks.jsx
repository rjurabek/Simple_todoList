import { useState, useReducer } from "react";
import TasksReduser from "./TaskReduser";
import './tasks.css';

export default function Tasks() {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(TasksReduser, []);

  const add = () => {
    dispatch({ type: "add", text });
    setText("");
  };

  const remove = (taskId) => {
    dispatch({ type: "remove", id: taskId });
  };

  const onDragStart = (e, task) => {
    e.dataTransfer.setData("taskId", task.id);
  };

 
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("taskId");
    dispatch({ type: "move", id, status: newStatus });
  };

  return (
    <div>
      <div className="input-block">

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>add</button>
      </div>

      <div className="parts">

        <div className="to-do part" >
          <h3>To-Do</h3>
          <ul className="part-ul" onDragOver={onDragOver} onDrop={(e)=>onDrop(e,'to-do')} > 
            {state
              .filter((task) => task.status === "to-do")
              .map((task) => (
                <li key={task.id} draggable onDragStart={(e) => onDragStart(e, task)} >
                  <p>{task.text}</p>
                  <button onClick={() => remove(task.id)}>remove</button> 
                </li>
              ))}
          </ul>
        </div>

        <div className="inProg part">
          <h3>In Progress</h3>
          <ul className="part-ul" onDragOver={onDragOver} onDrop={(e)=>onDrop(e,'prog')}>
            {state
              .filter((task) => task.status === "prog")
              .map((task) => (
                <li key={task.id} draggable onDragStart={(e) => onDragStart(e, task)} >
                  <p>{task.text}</p>
                  <button onClick={() => remove(task.id)}>remove</button>
                </li>
              ))}
          </ul>
        </div>


        <div className="done part">
          <h3>Done</h3>
          <ul className="part-ul" onDragOver={onDragOver} onDrop={(e)=>onDrop(e,'done')} >
            {state
              .filter((task) => task.status === "done")
              .map((task) => (
                <li key={task.id} draggable onDragStart={(e) => onDragStart(e, task)} >
                  <p>{task.text}</p>
                  <button onClick={() => remove(task.id)}>remove</button>
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

