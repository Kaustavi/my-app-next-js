"use client";

import { useState } from "react";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <ul className="list-disc">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}