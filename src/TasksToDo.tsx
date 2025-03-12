import { useState } from "react";
import deletePNG from "./assets/delete.png";
import editPNG from "./assets/edit.png";
import { Col, Stack, Card, Form, Button} from "react-bootstrap"
import EditForm from "./EditForm";

// type for taskArray task objects
type Task = {
  id: number,
  task: string
  completed: boolean
}
// giving my props addTask, deleteTask, editTask, and MarkComplete their respective types
type Props = {
  textColor: string;
  newWidth: number;
  bgColor: string;
  taskArray: Task[];
  addTask: (task: { id: number, task: string, completed: boolean }) => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number, updatedTask: string) => void;
  markComplete: (taskId: number) => void;
};

// use destructuring to grab deleteTask, editTask, taskArray, and markComplete then set their type to Props
// added edit and delete buttons
export default function TasksToDo({
  textColor,
  newWidth,
  bgColor,
  deleteTask,
  taskArray,
  editTask,
  markComplete
}: Props) {
  const [modalShow, setModalShow] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

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
              <Button 
                variant="outline-light"
                onClick={() => handleEditTask(task)}
                >
                <img src={editPNG} alt="Edit" />
              </Button>
              <Button 
                variant="outline-light"
                onClick={() => deleteTask(task.id)} // Pass the index to deleteTask
              >
                <img src={ deletePNG } alt="Delete" />
              </Button>
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