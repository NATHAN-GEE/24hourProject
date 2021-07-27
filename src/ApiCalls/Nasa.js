import React, { useEffect, useState } from "react";
import "./nasa.css";
import { Container, Row, Col, Button } from "reactstrap";

const GeoLocation = () => {
  const [showLong, setLongData] = useState(null);
  const [showLat, setLatData] = useState(null);
  const [img, setImg] = useState("");
  const [loading, setLoading] =useState(false)

  const getLocation = () => {
    setLoading(true)
    if (navigator.geolocation) {
      const showPosition = (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setLongData(long);
        setLatData(lat);
        let baseURL = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2020-06-01&dim=0.15&api_key=20ncZ7kCv10QyxhIt98XnIinn52SENwOqQs48CNr`;
        fetch(baseURL)
          .then((res) => {
            return res.blob();
          })
          .then((json) => {
            let obj = URL.createObjectURL(json);
            setImg(obj);
            setLoading(false)
          });
        };
        navigator.geolocation.getCurrentPosition(showPosition);
      }
  };
 
 
  return (
    <Container className="nasa">
      <Row>
        {/* <Col md="6"><p>Lat:{showLat}</p></Col> */}
        <Col>
          {/* <p>Long:{showLong}</p> */}
          <Button className="btnSize"  outline color="info" onClick={getLocation}>Get Location</Button>
          <p>{loading ? "Loading..." : <></>}</p>
        <img src={img} alt="" width="650px" ></img>
        </Col>
      </Row>
    </Container>
  );
};
export default GeoLocation;
