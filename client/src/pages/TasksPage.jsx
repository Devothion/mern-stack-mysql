import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTaks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTaks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No hay tareas creadas</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center mb-10">TAREAS</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
