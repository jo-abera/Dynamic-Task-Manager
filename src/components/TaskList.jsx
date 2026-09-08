import TaskItem from "./TaskItem";

// TaskList receives the already-filtered array of tasks from App and
// is responsible only for rendering them (or the empty state).
export default function TaskList({ tasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list__empty">
        <span className="task-list__empty-icon">✓</span>
        <p>
          {filter === "All"
            ? "No tasks yet. Add your first task."
            : `No ${filter.toLowerCase()} tasks.`}
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        // key is the task's stable unique id, never the array index,
        // so React can correctly track each item across re-renders.
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
