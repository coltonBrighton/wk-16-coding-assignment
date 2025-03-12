import { useState } from "react";
import { taskArray } from "./TEST_DATA";
import CompletedTasks from "./CompletedTasks";
import Navbar from "./Navbars";
import TasksToDo from "./TasksToDo";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";
import AddTaskBar from "./AddTaskBar";

export default function App() {
  // Use useState to manage taskArray state
  const [tasks, setTasks] = useState<{ id: number; task: string, completed:boolean }[]>(taskArray);

  const width = 18;

  // Delete task function
  const deleteTask = (taskId: number) => {
    // Filter out the task with the given taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // update state for updatedTasks
    setTasks(updatedTasks);
  };

  // addTask on button click
  const addTask = (newTask: { task: string, completed: boolean}) => {
    // find highest task id
    const highestTaskId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;

    // Set the new task ID as the next number after the highest ID
    const newTaskWithId = { ...newTask, id: highestTaskId + 1, completed: false };
    // update state for tasks
    setTasks([...tasks, newTaskWithId]);
    
  };

  // editTask on button click
  const editTask = (taskId: number, updatedTask: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, task: updatedTask } : task
      )
    );
  };
  
  // mark complete
  const markComplete = (taskId: number) => {
    // Toggle completed state of the task
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    // Update the state with the new task list
    setTasks(updatedTasks);
  };

  // mark incomplete
  const markIncomplete = (taskId: number) => {
    // Toggle completed state of the task
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: false } : task
    );
    // Update the state with the new task list
    setTasks(updatedTasks);
  };

  // Filter tasks for "to do" and "completed"
  const tasksToDo = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  // got rid of Sidebar component in favor of an addTaskbar component
  return (
    <div>
      <Row className="bg-dark vw-100">
      <Navbar />
        <AddTaskBar
          addTask={ addTask }
        />
        <TasksToDo
          newWidth={width}
          textColor="blue"
          bgColor="pink"
          deleteTask={deleteTask}
          taskArray={ tasksToDo }
          addTask={ addTask }
          editTask={ editTask }
          markComplete={ markComplete }
        />
        <CompletedTasks 
          newWidth={width} 
          textColor="grey" 
          bgColor="maroon" 
          deleteTask={ deleteTask }
          taskArray= { completedTasks }
          markIncomplete={ markIncomplete }
        />
      </Row>
      <Footer bgColor="black" />
    </div>
  );
}
