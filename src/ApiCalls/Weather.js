import React, { useState } from 'react';
import { Button, Card, Row, Col, Container } from 'reactstrap';
import "./nasa.css";


const WeatherApi = (props) => {
     //const [data, setData] = useState(null);
     const [locationName, setLocationName] = useState(null);
     const [country, setCountry] = useState(null);
     const [weather, setWeather] = useState(null);
     const [main, setMain] = useState(null);
     let [tempF, setTempF] = useState(null);
     let [tempC, setTempC] = useState(null);
     let [currentTemp, setCurrentTemp] = useState(null);
     let [disable, setDisable] = useState(null);
     //const [lat, setLat] = useState(null);
     

     const switchCurrentTemp = ()=>{
        if(!currentTemp && !tempF){
            setCurrentTemp("Please get the temperature");
        } else if(currentTemp === tempF){
            setCurrentTemp(tempC);
        } else{
            setCurrentTemp(tempF);
        }
     }

     const getGeoLocation = (props) => {
        setDisable(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
          }
    }
        const error = () => {
        console.log('error')
    }
    const success = (position) => {
        
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        //setLong(longitude)
        //setLat(latitude)

        console.log(latitude, longitude)

        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27ac26a93b2a180658f155f013fbf028`;
        
        
        fetch(url, {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    setLocationName(data.name);
                    setCountry(data.sys.country)
                    setWeather(data.weather[0].description)
                    setMain(data.weather[0].main)
                    setTempF((Math.round(data.main.temp - 273.15)) * 2 + 30)
                    setTempC(Math.round(data.main.temp - 273.15))
                    setCurrentTemp((Math.round(data.main.temp - 273.15)) * 2 + 30)

            })
            .catch((error) => {
                   console.error('Error:', error);
            })
           
        };
        
       return (
           <Container className="themed-container" fluid="sm">
               <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h4 className="text-info" >Display Weather</h4>
            <Card body>
            <Button outline color="info" size="sm" disabled={disable} onClick={getGeoLocation}>Click Me</Button>
        <h4 className="text-info item">{locationName }</h4>
        <h5 className="text-info">{ country }</h5>
        <p className="text-info">{ main }</p>
        <p className="text-info">{ weather }</p>
        <p className="text-muted">{ currentTemp }</p>
        <Button size="sm" outline color="info" onClick={switchCurrentTemp}>Switch Temperature</Button>
            </Card>
            
        </Col>
    </Row>
           </Container>
    
)
}

export default WeatherApi
