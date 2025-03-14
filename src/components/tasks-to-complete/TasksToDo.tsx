import { useState } from "react";
import { Col, Stack, Card, Form, } from "react-bootstrap"
import EditForm from "./EditForm";
import TaskButtons from "./TaskButtons";

type Task = {
  id: number,
  task: string
  completed: boolean
  important: boolean
}

type Props = {
  textColor: string;
  newWidth: number;
  bgColor: string;
  taskArray: Task[];
  addTask: (task: { id: number, task: string, completed: boolean, important: boolean }) => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number, updatedTask: string) => void;
  markComplete: (taskId: number) => void;
  markImportant: (taskId: number) => void;
};

export default function TasksToDo({
  textColor,
  newWidth,
  bgColor,
  deleteTask,
  taskArray,
  editTask,
  markComplete,
  markImportant
}: Props) {
  const [modalShow, setModalShow] = useState(false) // Use state for modal
  const [currentTask, setCurrentTask] = useState<Task | null>(null); // use state for the task selsected

  const handleEditTask = (task: Task) => {
    setCurrentTask(task);  // Set the task to edit
    setModalShow(true);     // Show modal
  };

  return (
    <Col style={{ backgroundColor: bgColor }}>
      <h4 className="display-5 text-center my-5">Tasks To Do:</h4>
      <Stack className="mb-5" gap={3}>
        {taskArray.map((task, index) => (
          <Card
            key={index}
            className="mx-auto shadow border-0"
            style={{ width: newWidth + "rem" }}
        >
          <Card.Body className="bg-light">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center"
            >
              <Form className="w-100">
                <Form.Check
                  style={{ color: textColor }}
                  type="checkbox"
                  label={ <span>{task.task}</span> }
                  onChange={ () => markComplete(task.id) }
                  checked={task.completed}
                />
              </Form>
              <TaskButtons 
                task={task} 
                deleteTask={deleteTask} 
                handleEditTask={handleEditTask}
                markImportant={markImportant}
              />
            </Stack>
          </Card.Body>
        </Card>
        ))}
        
      </Stack>
      {currentTask && (
        <EditForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          task={currentTask}
          onSave={(updatedTask) => {
            editTask(currentTask.id, updatedTask); // Pass updated task to parent
            setModalShow(false);
          }}
        />
      )}
    </Col>
  );
}