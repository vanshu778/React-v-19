import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  //Delete Functionality
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curElem) => curElem != value);
    setTask(updatedTask);
  };

  //handleClearTodoData
  const handleClearTodoData = () => {
    setTask([]);
  };


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate/>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>

      <section className="clear-btn" onClick={handleClearTodoData}>
        Clear
      </section>
    </section>
  );
};
