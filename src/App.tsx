import { useState } from "react";
import { taskArray } from "./TEST_DATA";
import CompletedTasks from "./components/CompletedTasks";
import Navbar from "./components/Navbars";
import TasksToDo from "./components/tasks-to-complete/TasksToDo";
import { Row } from "react-bootstrap";
import Footer from "./components/Footer";
import AddTaskBar from "./components/AddTaskBar";
import ImportantTasks from "./components/important-tasks/ImportantTasks";

export default function App() {
  const [tasks, setTasks] =
    useState<
      { id: number; task: string; completed: boolean; important: boolean }[]
    >(taskArray);

  const width = 25;

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addTask = (newTask: {
    task: string;
    completed: boolean;
    important: boolean;
  }) => {
    const highestTaskId = // find highest task id
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
    const newTaskWithId = { // Set the new task ID as the next number after the highest ID
      ...newTask,
      id: highestTaskId + 1,
      completed: false,
    };
    setTasks([...tasks, newTaskWithId]); // update state for tasks
  };

  const editTask = (taskId: number, updatedTask: string) => { // find task to edit and use map to update task
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, task: updatedTask } : task
      )
    );
  };

  const markComplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) => // Toggle completed state of the task
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks); // Update the state with the new task list
  };

  const markIncomplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) => // Toggle completed state of the task
      task.id === taskId ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks); // Update the state with the new task list
  };

  const markImportant = (taskId: number) => {
    const updatedTasks = tasks.map((task) => // Toggle important state of task
      task.id === taskId ? { ...task, important: true } : task
    );
    setTasks(updatedTasks); // Update state with the new task list
  };

  const markUnimportant = (taskId: number) => {
    const updatedTasks = tasks.map((task) => // Toggle important state of task
      task.id === taskId ? { ...task, important: false } : task
    );
    setTasks(updatedTasks); // Update state with the new task list
  };

  // Filter tasks for "to do", "completed", and "important"
  const tasksToDo = tasks.filter((task) => !task.completed && !task.important);
  const completedTasks = tasks.filter((task) => task.completed);
  const importantTasks = tasks.filter(
    (task) => task.important && !task.completed
  );

  return (
    <>
      <div className="bg-dark">
        <Navbar />
        <AddTaskBar addTask={addTask} />
        <Row className="vw-100 min-vh-100">
          {importantTasks.length !== 0 && (
            <ImportantTasks
              newWidth={width}
              textColor="red"
              deleteTask={deleteTask}
              taskArray={importantTasks}
              markUnimportant={markUnimportant}
              bgColor="grey"
              markComplete={markComplete}
            />
          )}
          {tasksToDo.length !== 0 && (
            <TasksToDo
              newWidth={width}
              textColor="blue"
              bgColor="pink"
              deleteTask={deleteTask}
              taskArray={tasksToDo}
              addTask={addTask}
              editTask={editTask}
              markComplete={markComplete}
              markImportant={markImportant}
            />
          )}
          {completedTasks.length !== 0 && (
            <CompletedTasks
              newWidth={width}
              textColor="grey"
              bgColor="maroon"
              deleteTask={deleteTask}
              taskArray={completedTasks}
              markIncomplete={markIncomplete}
            />
          )}
        </Row>
      </div>
      <Footer />
    </>
  );
}
