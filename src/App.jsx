import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

let nextId = 5;

const STARTER_TASKS = [
  { id: 1, text: "Learn React components", completed: true, priority: "low" },
  { id: 2, text: "Practice JSX", completed: true, priority: "low" },
  { id: 3, text: "Build a small project", completed: false, priority: "medium" },
  { id: 4, text: "Push the project to GitHub", completed: false, priority: "high" },
];

export default function App() {
  // The three pieces of state the assignment asks for: the task
  // collection and the selected filter live here. (The current input
  // text lives inside TaskForm, closer to where it's used.)
  const [tasks, setTasks] = useState(STARTER_TASKS);
  const [filter, setFilter] = useState("All");

  function addTask(text, priority) {
    setTasks((prev) => [
      ...prev,
      { id: nextId++, text, completed: false, priority },
    ]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }

  function resetAll() {
    setTasks([]);
  }

  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = totalCount - completedCount;

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Not Completed") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1 className="app__title">Task Manager</h1>
          <p className="app__subtitle">Keep today's work in one place.</p>
        </div>
        {totalCount > 0 && (
          <button type="button" className="app__reset" onClick={resetAll}>
            Reset all
          </button>
        )}
      </header>

      <section className="stats" aria-label="Task statistics">
        <div className="stats__card">
          <span className="stats__value">{totalCount}</span>
          <span className="stats__label">Total</span>
        </div>
        <div className="stats__card">
          <span className="stats__value stats__value--completed">{completedCount}</span>
          <span className="stats__label">Completed</span>
        </div>
        <div className="stats__card">
          <span className="stats__value stats__value--active">{activeCount}</span>
          <span className="stats__label">Active</span>
        </div>
      </section>

      <TaskForm onAddTask={addTask} />

      <TaskFilter
        filter={filter}
        onFilterChange={setFilter}
        completedCount={completedCount}
        onClearCompleted={clearCompleted}
      />

      <TaskList
        tasks={visibleTasks}
        filter={filter}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
