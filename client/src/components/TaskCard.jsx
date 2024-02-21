import { useTaks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTaks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done === 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createdAt}</span>
      <div className="flex gap-x-1 float-end">
        <button className="bg-red-500 px-2 py-1 text-white rounded-md" onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="bg-slate-800 px-2 py-1 text-white rounded-md" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
        <button className="bg-green-500 px-2 py-1 text-white rounded-md" onClick={() => handleDone(task.done)}>Toggle Task</button>
      </div>
    </div>
  );
}

export default TaskCard;
