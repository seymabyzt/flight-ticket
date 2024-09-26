import React, { useState} from "react";
import styles from "./Tickets.module.css";
import { Button } from "../../atoms/buttons/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../atoms/inputs/Input";
import {getTimeOfDateStr, getFormattedDate } from "../../../function";

export const Tickets = ({ allFlightsData }) => {
  const [newTicket, setTicket] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const navigate = useNavigate();


  const buyTicket = (flightName, roughtDestinations, scheduleDateTime, actualLandingTime) => {
    const ticketData = {
      flightName: flightName,
      roughtDestinations: roughtDestinations,
      scheduleDateTime: scheduleDateTime,
      actualLandingTime: actualLandingTime,
    };
 
    localStorage.setItem("selectedFlight", JSON.stringify(ticketData));

    localStorage.setItem("newTicket", JSON.stringify(newTicket));

    setTicket({ name: "", surname: "", email: ""})
    navigate("/myflights");
  }

  return (
    <>
      <div className={styles.ticketsBackground}>
        {allFlightsData?.map((flight, index) => (
          <div key={index} className={styles.ticketBackground}>
            <div className="mb-3">
              <h5>AMS - {flight.roughtDestinations}</h5>
              <p>{getFormattedDate(flight.scheduleDateTime)}</p>
            </div>
            <div className="d-flex mb-3 ">
              <div className="col lh-sm d-flex align-items-center">
                <div className="me-5">
                <p>Departure</p>
                <p>{getTimeOfDateStr(flight.scheduleDateTime)}</p>
                <p>Airport: AMS</p>
                </div>
                <div className="ms-5">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <div className="col lh-sm d-flex align-items-center">
                <div className="me-5">
                {flight.flightName}
                </div>
                <div className="ms-5">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <div className="col lh-sm">
                <p>Arrivals</p>
                <div >
                  <p>{getTimeOfDateStr(flight.actualLandingTime)}</p>
                </div>
                <p>Airport: {flight.roughtDestinations}</p>
              </div>
            </div>
            <div>Price: 250</div>
            <div className="position-absolute top-100 start-0">
              <Button
                className={styles.checkButton}
                text={'Check The Details'}
              />
            </div>
            <div className="position-absolute bottom-0 end-0">
              <button
                type="button"
                className={styles.buyTicketButton}
                data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
              >Buy Ticket</button>

            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Buy Ticket</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>You buy ticket from AMA to  {flight.roughtDestinations}</p>
                    <form >
                      <div className="mb-3 d-flex gap-2">
                        <div>

                          <label htmlFor="name" className="col-form-label">Name:</label>
                          <Input type="text"
                            className="form-control"
                            id="name"
                            value={newTicket.name}
                            onChange={(e) => setTicket({ ...newTicket, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="surname" className="col-form-label">Surname:</label>
                          <Input
                            type="text"
                            className="form-control"
                            id="surname"
                            value={newTicket.surname}
                            onChange={(e) => setTicket({ ...newTicket, surname: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="col-form-label">Mail:</label>
                        <Input
                          type="email"
                          value={newTicket.email}
                          onChange={(e) => setTicket({ ...newTicket, email: e.target.value })}
                          className="form-control"
                          id="email"
                          required>
                        </Input>
                      </div>
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button onClick={() => buyTicket(
                        flight.flightName,
                        flight.roughtDestinations,
                        flight.scheduleDateTime,
                        flight.actualLandingTime
                      )} type="submit" data-bs-dismiss="modal" className="btn btn-primary">Buy Ticket</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
