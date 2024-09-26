import React, { useEffect, useState } from "react";
import styles from "./MyFlights.module.css";
import { getFormattedDate, getTimeOfDateStr } from "../../../function";

export const MyFlights = () => {

  const [tickets, setTickets] = useState([]);
  const scheduleDateTime = tickets.scheduleDateTime
  const actualLandingTime = tickets.actualLandingTime

  useEffect(() => {
    // localStorage'dan biletleri çekiyorum
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
  }, []);

  return (
    <>
      <div>
        <h3>My Flights</h3>
      </div>
      <div className={styles.ticketsBackground}>
      {tickets.map((ticket, index) => (
          <div  key={index} className={styles.ticketBackground}>
            <div className="mb-3">
              <h5>AMS - {ticket.roughtDestinations}</h5>
              <p>{getFormattedDate(ticket.scheduleDateTime)}</p>
            </div>
            <div className="d-flex mb-3">
              <div className="col lh-sm d-flex align-items-center">
                <div className="me-5">
                <p>Departure</p>
                <p>{getTimeOfDateStr(ticket.scheduleDateTime)}</p>
                <p>Airport: AMS</p>
                </div>
                <div className="ms-5">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              
              <div className="col lh-sm d-flex align-items-center">
                <div className="me-5">
                <p>{ticket.flightName}</p>
                </div>
                <div className="ms-5">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <div className="col lh-sm">
                <p>Arrivals</p>
                  <p>{getTimeOfDateStr(ticket.actualLandingTime)}</p>
                <p>Airport: {ticket.roughtDestinations}</p>
              </div>
            </div>
            <div>Price: 250</div>
          </div>
))}
      </div>
    </>
  );
};
