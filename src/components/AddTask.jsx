import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 p-2 rounded-md text-white px-4 py-2 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
