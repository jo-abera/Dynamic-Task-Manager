const FILTERS = ["All", "Completed", "Not Completed"];

// TaskFilter is purely presentational: it receives the currently active
// filter and reports clicks back up through onFilterChange. It doesn't
// know how filtering is implemented -- that logic lives in App.
export default function TaskFilter({ filter, onFilterChange, completedCount, onClearCompleted }) {
  return (
    <div className="task-filter">
      <div className="task-filter__tabs">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            className={
              "task-filter__tab" +
              (filter === option ? " task-filter__tab--active" : "")
            }
            onClick={() => onFilterChange(option)}
            aria-pressed={filter === option}
          >
            {option}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          className="task-filter__clear"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
