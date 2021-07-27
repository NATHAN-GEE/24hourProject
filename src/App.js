import "./App.css";
import { Container, Row, Col, Button } from "reactstrap";

import GeoLocation from "./ApiCalls/Nasa";
import Ticket from "./ApiCalls/Ticket";

function App() {
  return (
      <Container>
        <Row >
          <Col md="6">
            <GeoLocation />
          </Col>
          <Col md="6">
            <Ticket />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
