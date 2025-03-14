import deletePNG from "../assets/delete.png";
import { Col, Stack, Card, Form, Button } from "react-bootstrap";

// type for completedTask object in completedTaskArray
type Task = {
  id: number,
  task: string,
  completed: boolean,
  important: boolean
}
// giving my prop deleteCompletedTask and completedTaskArray their respective type
type Props = {
  newWidth: number;
  textColor: string;
  bgColor: string;
  taskArray: Task[];
  deleteTask: (taskId: number) => void;
  markIncomplete: (taskId: number) => void;
};

// Updated application to include the completedTaskArray and the deleteCompletedTask function
// added delete button
export default function CompletedTasks({
  newWidth,
  textColor,
  bgColor,
  taskArray,
  deleteTask,
  markIncomplete
}: Props) {
  return (
    <Col md className="" style={{ backgroundColor: bgColor }}>
        <h4 className="display-5 text-center my-5 text-light">Completed Tasks:</h4>
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
                  label={<span className="text-decoration-line-through">{task.task}</span>}
                  onChange={ () => markIncomplete(task.id) }
                  checked={task.completed}
                />
              </Form>
              <Button 
                variant="outline-light"
                onClick={() => deleteTask(task.id)} // Pass the index to deleteTask
              >
                <img src={deletePNG} alt="Delete" />
              </Button>
            </Stack>
          </Card.Body>
        </Card>
        ))}
 
      </Stack>
    </Col>
  );
}
