// Shared priority metadata used across TaskForm (to pick a priority)
// and TaskItem (to display it). Keeping this in one place means
// adding a new priority level only requires one edit.
export const PRIORITIES = {
  low: { label: "Low" },
  medium: { label: "Medium" },
  high: { label: "High" },
};

export const PRIORITY_ORDER = ["low", "medium", "high"];
