import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";


export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright Sudo &#169; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
