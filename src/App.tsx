import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App = () => {
  const [showAddTodoForm, setAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User two" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User one",
    },
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter((value) => {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
};
