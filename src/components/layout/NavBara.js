import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Offcanvas,
  Container,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavBara() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };
  return (
    <div id="nav">
      <Navbar fixed="top" bg="dark" variant="dark" className="container mx-auto my-3 py-3 rounded-4 shadow" expand={false}>
        <Container fluid>
          <Link to={"/"}>
            <img src="../img/logo5.png" alt="부산광역시 통합예약시스템" id="logo" className="me-3" />
          </Link>
<<<<<<< HEAD
          <div className="d-flex justify-content-center">
=======
          <div className="d-flex justify-content-center" style={styles.move}>
>>>>>>> e4add0c9b7c009fae97f504c9d0dcd576aeccc41
            <Nav.Link href="/post">공지사항</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </div>
          <Navbar.Toggle className="border-0" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            backdrop="false"
          >
            <Offcanvas.Header closeButton>
              <Link to={"/"}>
                <img src="../img/logo4.png" alt="부산광역시 통합예약시스템" id="logo" className="me-3" 
                style={{height:"30px"}}/>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="border-bottom" href="/post">공지사항</Nav.Link>
                <Nav.Link href="/login">로그인</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
  
}
const styles = {
    move : {
      position: 'absolute',
      marginLeft: '950px',
      display: 'flex',
      fontSize: '1.53rem',

  },
}
  


export default NavBara;
