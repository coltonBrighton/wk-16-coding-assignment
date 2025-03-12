import { ChangeEvent, MouseEvent, useState } from "react";
import addPNG from "./assets/more.png"
import { Container, Form, InputGroup, Button } from "react-bootstrap";

// adding type for addTask function
type Props = {
    addTask: (task: { task: string, completed: boolean }) => void;
};

// updated taskbar button to be a plus icon
export default function AddTaskBar({addTask}: Props) {
  const [formValues, setFormValues] = useState({ 
    task: '', 
    completed: false
  })
  const handleChange = (event: ChangeEvent<HTMLInputElement>)  => setFormValues({
    ...formValues,
    [event.target.name]: event.target.value
  })
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addTask({...formValues, completed: false})
    setFormValues({ ...formValues, task: "" })

  }
  return (
    <div className="d-flex">
      <Container className="my-5 justify-content-center">
          <InputGroup>
            <Form.Control
                placeholder="Input New Task"
                onChange={handleChange}
                name="task"
                value={formValues.task}
            />
            <Button 
                variant="secondary" 
                onClick={ handleSubmit }
            >
                <img src={ addPNG } alt="add" />
            </Button>
          </InputGroup>
      </Container>
    </div>
  )
}