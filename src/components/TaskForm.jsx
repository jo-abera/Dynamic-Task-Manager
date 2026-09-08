import { useState } from "react";
import { PRIORITIES, PRIORITY_ORDER } from "../priorities";

// TaskForm owns only the input's local state (the text being typed and
// the chosen priority). The moment a task is submitted, that data is
// handed up to App via the onAddTask callback prop, and App is the one
// that actually updates the tasks array.
export default function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return; // empty input must not create a task

    onAddTask(trimmed, priority);
    setText(""); // clear the input after adding
    setPriority("medium");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="What needs doing?"
        value={text}
        onChange={(event) => setText(event.target.value)}
        aria-label="New task text"
      />

      <select
        className="task-form__priority"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
        aria-label="Task priority"
      >
        {PRIORITY_ORDER.map((key) => (
          <option key={key} value={key}>
            {PRIORITIES[key].label} priority
          </option>
        ))}
      </select>

      <button type="submit" className="task-form__submit">
        Add task
      </button>
    </form>
  );
}
