import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

type EditFormProps = {
  show: boolean;
  onHide: () => void;
  task: { id: number; task: string; completed: boolean };
  onSave: (updatedTask: string) => void;
};

export default function EditForm({ show, onHide, task, onSave }: EditFormProps) {
  const [taskText, setTaskText] = useState(task.task); // using state for task text

  // Update task text when the task prop changes
  useEffect(() => {
    setTaskText(task.task);
  }, [task]);

  const handleSave = () => {
    onSave(taskText); // Save the changes
  };

  return (
    <Modal 
        show={show} 
        onHide={onHide} 
        className="text-light" 
        data-bs-theme="dark"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}