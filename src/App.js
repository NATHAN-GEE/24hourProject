import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Weather from './ApiCalls/Weather'

import GeoLocation from "./ApiCalls/Nasa";
import Ticket from "./ApiCalls/Ticket";

function App() {
  return (
      <Container>
        <Row >
          <Col md="6">
            <GeoLocation />
          </Col>
          </Row>
          <Row>
          <Col md="6">
            <Weather />
          </Col>
          <Col md="6">
            <Ticket />
          </Col>
          
          </Row>
      </Container>
  );
}

export default App;
