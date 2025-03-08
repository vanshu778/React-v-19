import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const{id,content,checked} = inputValue;

    //to check if the imput field is empty or not
    if (!content) return;

    //to check if the data is already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find((curTask)=>curTask.content === content);
    if(ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, {id, content, checked}]);
  };

  //Delete Functionality
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content != value);
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
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.index}
                data={curTask.content}
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
