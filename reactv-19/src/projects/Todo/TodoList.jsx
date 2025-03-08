import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,onHandleDeleteTodo}) => {
    return(
        <li className="todo-item">
                <span>{data}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                  <MdDeleteForever />
                </button>
              </li>
    );
}