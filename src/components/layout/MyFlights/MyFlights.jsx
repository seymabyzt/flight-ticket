import React, { useEffect, useState } from "react";
import styles from "./MyFlights.module.css";
import { getFormattedDate, getTimeOfDateStr } from "../../../function";

export const MyFlights = () => {

  const [selectedFlight, setSelectedFlight] = useState({});
  const scheduleDateTime = selectedFlight.scheduleDateTime
  const actualLandingTime = selectedFlight.actualLandingTime


  useEffect(() => {
    const flightData = JSON.parse(localStorage.getItem("selectedFlight"));
    if (flightData) {
      setSelectedFlight(flightData); 
    }
  }, []);


  return (
    <>
      <div>
        <h3>My Flights</h3>
      </div>
      <div className={styles.ticketsBackground}>
          <div className={styles.ticketBackground}>
            <div className="mb-3">
              <h5>AMS - {selectedFlight.roughtDestinations}</h5>
              <p>{getFormattedDate(scheduleDateTime)}</p>
            </div>
            <div className="d-flex mb-3">
              <div className="col lh-sm d-flex align-items-center">
                <div className="me-5">
                <p>Departure</p>
                <p>{getTimeOfDateStr(scheduleDateTime)}</p>
                <p>Airport: AMS</p>
                </div>
                <div className="ms-5">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              
              <div className="col lh-sm d-flex align-items-center">
                <div className="me-5">
                <p>{selectedFlight.flightName}</p>
                </div>
                <div className="ms-5">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <div className="col lh-sm">
                <p>Arrivals</p>
                  <p>{getTimeOfDateStr(actualLandingTime)}</p>
                <p>Airport: {selectedFlight.roughtDestinations}</p>
              </div>
            </div>
            <div>Price: 250</div>
          </div>

      </div>
    </>
  );
};
