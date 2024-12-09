import React from "react";
import ToDo from "./ToDo";

function ToDoList(props) {
    return (
        <ul className="p-2 m-0">
            {
                props.data.map(todo => 
                    <ToDo key={todo.id} data={todo} handleRemove={props.handleRemove}/>
                )
            }
        </ul>
    )
}

export default ToDoList