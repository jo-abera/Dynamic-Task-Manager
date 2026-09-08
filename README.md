# Dynamic Task Manager

A responsive React + Vite task management app built to help users organize daily work, track completion status, and prioritize key tasks efficiently.

## Overview

Dynamic Task Manager is a lightweight productivity application for creating, tracking, filtering, and deleting tasks. It provides a clean, user-friendly interface and supports task prioritization so users can easily distinguish between low, medium, and high priority work.

The application demonstrates core React concepts such as state management, component composition, conditional rendering, and event-driven updates.

## Features

- Create new tasks with custom text and priority levels
- Mark tasks as complete or incomplete
- Delete individual tasks
- Filter tasks by All, Completed, or Not Completed
- Clear all completed tasks with one action
- Reset the full task list when needed
- View quick task statistics for total, completed, and active tasks
- Responsive, modern UI built with React

## Tech Stack

- React 19
- Vite
- JavaScript
- CSS

## Project Structure

```text
Dynamic-Task-Manager/
├── src/
│   ├── components/
│   │   ├── TaskFilter.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── priorities.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Dynamic-Task-Manager
```

2. Install dependencies:

```bash
npm install
```

### Run the app locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### Production build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. Enter a task in the input field.
2. Select a priority level from the dropdown menu.
3. Click Add task to add it to the list.
4. Use the filter buttons to view all tasks or only completed/incomplete items.
5. Click the checkbox to toggle completion.
6. Use the delete button to remove a task.
7. Click Clear completed to remove all finished tasks.

## License

This project is open for educational and personal use. If you plan to use it commercially or in a production environment, confirm the licensing terms that apply to your project.

## Author

Built as a React task management exercise for learning component-driven UI development and state management.
