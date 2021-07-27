import React, {useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./nasa.css";

const Ticket = () => {
    const [info, setInfo] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");
    let ticketMaster = () => {
        fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=US&apikey=QrVvmGfWPgwxhPECDkYrBDglgXiK6b9T&latlong=39.8691,-85.934`
        )
            .then((res) => res.json())
            .then((data) => {
                setInfo(data._embedded.events[0].name);
                setInfo2(data._embedded.events[1].name);
                setInfo3(data._embedded.events[2].name);
                setInfo4(data._embedded.events[3].name);
                setInfo5(data._embedded.events[4].name);
            });
    };

    return (
      <Container className="nasa">
        <Row>
          <Col md="6">
            <Button  className="btnSize" outline color="info" onClick={ticketMaster}>Nearby Events</Button>
            <ul>
              <li className="item">{info}</li>
              <li className="item">{info2}</li>
              <li className="item">{info3}</li>
              <li className="item">{info4}</li>
              <li className="item">{info5}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
}
export default Ticket;