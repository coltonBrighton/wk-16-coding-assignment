import deletePNG from "../../assets/delete.png";
import editPNG from "../../assets/edit.png";
import Button from "react-bootstrap/Button";
import warningPNG from "../../assets/warning.png"

type Task = {
    id: number
    task: string
    completed: boolean
    important: boolean
}
type Props = {
  deleteTask: (taskId: number) => void
  handleEditTask: (task: { id: number, task: string, completed: boolean, important: boolean }) => void
  task: Task
  markImportant: (taskId: number) => void
};

export default function TaskButtons({ 
    deleteTask, 
    handleEditTask, 
    task,
    markImportant 
}: Props) {
  return (
    <>
      <Button variant="outline-light" onClick={() => handleEditTask(task)}>
        <img src={editPNG} alt="Edit" />
      </Button>
      <Button
        variant="outline-light"
        onClick={() => deleteTask(task.id)} // Pass the index to deleteTask
      >
        <img src={deletePNG} alt="Delete" />
      </Button>
      <Button 
        variant="outline-light"
        onClick={() => markImportant(task.id)} // Pass index to markImportent
      >
        <img src={warningPNG} alt="Important" />
      </Button>
    </>
  );
}
