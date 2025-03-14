import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// changed navbarColor to bg-secondary
export default function Navbars() {
  return (
    <Navbar className="bg-secondary" data-bs-theme="dark">
      <Container className="justify-content-center">
        <Navbar.Brand>To Do App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
