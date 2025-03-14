
import { Button } from "react-bootstrap";
import deletePNG from "../../assets/delete.png";
import warningFilledPNG from "../../assets/warningFilled.png";

type Task = {
    id: number
    task: string
    completed: boolean
    important: boolean
}

type Props = {
    deleteTask: (taskId: number) => void;
    task: Task
    markUnimportant: (taskId: number) => void;
};

export default function ImportantButtons({
    deleteTask,
    task,
    markUnimportant
}: Props) {
  return (
    <>
      <Button
        variant="outline-light"
        onClick={() => deleteTask(task.id)} // Pass the index to deleteTask
      >
        <img src={deletePNG} alt="Delete" />
      </Button>
      <Button
        variant="outline-light"
        onClick={() => markUnimportant(task.id)}>
        <img src={warningFilledPNG} alt="Important"/>
      </Button>
    </>
  );
}
