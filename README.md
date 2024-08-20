# Todo List Application

A simple and efficient Todo List application built with React.js, allowing users to add, manage, and delete tasks. The application stores the tasks in the browser's `localStorage`, ensuring that the list persists even after the page is refreshed.

- **Live Preview:** [click here](https://todo-app-react-chi-eight.vercel.app)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Todo](#todo)
  - [TodoItems](#todoitems)
- [Styles](#styles)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Tasks:** Users can add new tasks to the list.
- **Mark Tasks as Completed:** Users can click on a task to mark it as completed, which applies a line-through style to the task.
- **Delete Tasks:** Users can delete tasks from the list.
- **Persisted State:** The tasks are stored in `localStorage`, so they persist even after the page is reloaded.
- **Keyboard Interaction:** Users can add tasks by pressing the Enter key.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-list-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open your browser and navigate to:**

   ```bash
   http://localhost:3000 // or any link given to you
   ```

## Usage

1. **Adding a Task:**

   - Type your task into the input field.
   - Click the "ADD" button or press the Enter key to add the task to the list.

2. **Marking a Task as Completed:**

   - Click on the task to toggle its completed state. Completed tasks will have a line-through style.

3. **Deleting a Task:**
   - Click the red cross icon next to a task to delete it from the list.

## Components

### Todo

The `Todo` component is the main container of the application. It manages the state of the todo list and handles the addition of new tasks.

- **State:**
  - `todos`: Array of tasks.
  - `inputRef`: Reference to the input field.
- **Methods:**
  - `add`: Adds a new task to the list.
  - `useEffect`: Handles the initial load of tasks from `localStorage` and saves tasks to `localStorage` whenever the `todos` array changes.

### TodoItems

The `TodoItems` component represents an individual task in the list.

- **Props:**
  - `no`: Unique identifier for the task.
  - `display`: Style property (e.g., line-through for completed tasks).
  - `text`: The task description.
  - `setTodos`: Function to update the list of tasks.
- **Methods:**
  - `toggle`: Toggles the completed state of a task.
  - `deleteTodo`: Deletes a task from the list.

## Styles

The application’s styles are located in the `css/todo.css` and `css/todoitems.css` files. These styles define the appearance of the application, including the layout, fonts, colors, and other UI elements.

## Future Improvements

- **Task Editing:** Allow users to edit existing tasks.
- **Due Dates:** Add due dates to tasks and highlight overdue tasks.
- **Categories:** Allow users to categorize tasks for better organization.
- **Priority Levels:** Add priority levels (e.g., high, medium, low) to tasks.
- **Animations:** Implement smooth animations for adding, completing, and deleting tasks.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
