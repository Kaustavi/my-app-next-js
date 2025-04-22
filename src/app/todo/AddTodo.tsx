"use client";

import { useState } from "react";

interface AddTodoProps {
  onAdd: (todo: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim()) {
      onAdd(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        className="border px-2 py-1 rounded"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}