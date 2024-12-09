import React from "react";

function ToDo(props) {
    const todo = props.data;

    return (
        <li className="list-group-item py-2 px-1">
            <div>
                <p className="m-0"><i className="fa-solid fa-calendar"></i>{props.data.text}<span> - Creato in data {new Date(todo.date).toLocaleDateString()}</span></p>
            </div>
            <button className="btn btn-danger" onClick={ () => props.handleRemove(props.data) }><i className="fa-solid fa-xmark"></i></button>
        </li>
    )
}

export default ToDo