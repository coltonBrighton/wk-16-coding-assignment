import { Col, Stack, Card, Form } from "react-bootstrap";
import ImportantButtons from "./ImportantButtons";

type Task = {
    id: number
    task: string
    completed: boolean
    important: boolean
}

type Props = {
    newWidth: number;
    textColor: string;
    deleteTask: (taskId: number) => void;
    taskArray: Task[];
    markUnimportant: (taskId: number) => void;
    bgColor: string
    markComplete: (taskId: number) => void;
}

export default function ImportantTasks({
    newWidth,
    textColor,
    deleteTask,
    taskArray,
    markUnimportant,
    bgColor,
    markComplete
}: Props) {
  return (
    <Col md className="" style={{ backgroundColor: bgColor }}>
        <h4 className="display-5 text-center my-5 text-light">Important Tasks:</h4>
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
                  label={<span>{task.task}</span>}
                  onChange={ () => markComplete(task.id) }
                  checked={task.completed}
                />
              </Form>
              <ImportantButtons 
                task={task} 
                deleteTask={deleteTask} 
                markUnimportant={markUnimportant} 
              />
            </Stack>
          </Card.Body>
        </Card>
        ))}
 
      </Stack>
    </Col>
  )
}