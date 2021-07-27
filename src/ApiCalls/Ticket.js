import React, {useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";

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
            <Button onClick={ticketMaster}>Get nearby Events</Button>
            <ul>
              <li>{info}</li>
              <li>{info2}</li>
              <li>{info3}</li>
              <li>{info4}</li>
              <li>{info5}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
}
export default Ticket;