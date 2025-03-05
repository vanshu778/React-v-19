// const users= [
//     {name:"Alice", age:25},
//     {name:"Bob", age:30},
//     {name:"Charlie", age:35},
//     {name:"Angles", age:45},
// ];
import { useState } from "react";

export const DericedState = () => {
    const[users,setUsers]= useState([
        {name:"Alice", age:25},
        {name:"Bob", age:30},
        {name:"Charlie", age:35},
        {name:"Angles", age:45},
    ]);

    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {users.map((curElem,index) => {
                    return(
                        <li key = {index}>
                            {curElem.name}-{curElem.age} year old
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};