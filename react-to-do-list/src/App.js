import React, { useState } from 'react';
import './App.css';
import InjectionForm from "./components/InjectionForm";
import ToDoList from "./components/ToDoList";
import {data} from "./data/todos";

function App(props) {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState({
    id: data.length + 1,
    text: '',
    date: new Date()
  });

  const handleChange = (event) => {
    event.persist();

    setNewTodo({
      ...newTodo,
      text: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, newTodo]);

    setNewTodo({
      ...newTodo,
      id: newTodo.id + 1,
      text: '',
    });
  };

  const handleRemove = (todo) => {
    const newTodos = todos.filter(item => item.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="page">
        <div className="card">
            <div className="card-header">
              <InjectionForm data="newToDo" handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
            <div className="card-body">
              <ToDoList data={todos} handleRemove={handleRemove}></ToDoList>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;