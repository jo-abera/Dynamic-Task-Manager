import { PRIORITIES } from "../priorities";

// TaskItem displays exactly one task. It never touches the tasks array
// directly -- it just calls the onToggle/onDelete callbacks it was
// given as props, and lets App decide what "toggle" or "delete" means.
export default function TaskItem({ task, onToggle, onDelete }) {
  const priority = PRIORITIES[task.priority];

  return (
    <li
      className={
        "task-item" +
        (task.completed ? " task-item--completed" : "") +
        ` task-item--${task.priority}`
      }
    >
      <button
        type="button"
        className="task-item__checkbox"
        role="checkbox"
        aria-checked={task.completed}
        aria-label={task.completed ? "Mark as not completed" : "Mark as completed"}
        onClick={() => onToggle(task.id)}
      >
        {task.completed && (
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
            <path
              d="M3 8.5l3 3 7-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span className="task-item__text">{task.text}</span>

      <span className="task-item__priority">
        <span className="task-item__priority-dot" />
        {priority.label}
      </span>

      <button
        type="button"
        className="task-item__delete"
        aria-label={`Delete "${task.text}"`}
        onClick={() => onDelete(task.id)}
      >
        <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
          <path
            d="M5 6h10M8 6V4.5A1.5 1.5 0 019.5 3h1A1.5 1.5 0 0112 4.5V6m-6 0v9a1 1 0 001 1h4a1 1 0 001-1V6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
}
