import React, { useState, useEffect } from 'react';
import './TrafficLight.css'; 

//main trafficLight function
const TrafficLight = () => {
  const [light, setLight] = useState('red'); 

  useEffect(() => {

    //changing light color after 2 secs
    const timer = setInterval(() => {
      setLight((prevLight) => {
        switch (prevLight) {
            case "red":
                return "green"
             
                case "green":
                    return "yellow"
                    
                    case "yellow":
                        return "red"
            default:
                return "red";
                
        }
      });
    }, 2000); 

    return () => clearInterval(timer); // to stop the timer and restart the cycle
  }, []);

  return (

    //html elements for traffic light
    <div className="traffic-light">
      <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
