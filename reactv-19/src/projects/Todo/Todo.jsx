import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the imput field is empty or not
    if (!content) return;

    //to check if the data is already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //Add data to localstorage
  setLocalStorageTodoData(task);

  //Delete Functionality
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content != value);
    setTask(updatedTask);
  };

  //handleClearTodoData
  const handleClearTodoData = () => {
    setTask([]);
  };

  //handleCheckedTodo
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.index}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear
        </button>
      </section>
    </section>
  );
};
