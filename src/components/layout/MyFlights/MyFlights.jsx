import React from "react";
import  styles  from "./MyFlights.module.css";
import { Button } from "../../atoms/buttons/Button";

export const MyFlights = () => {
  return (
    <>
    <div>
      <h3>My Flights</h3>
    </div>
    <div className={styles.ticketsBackground}>
          <div className={styles.ticketBackground}>
            <div className="mb-3">
              <h5>AMS</h5>
            </div>
            <div className="d-flex mb-3">
              <div className="col lh-sm">
                <p>Departure</p>
                <p>Time </p>
                <p>Airport: AMS</p>
              </div>
              <div className="col lh-sm">Firma:</div>
              <div className="col lh-sm">
                <p>Arrivals</p>
                {/* {formattedTime.map((e, index) => {
                  <div key={index}>
                     <p>{e.time}</p>
                    </div>
                })} */}
                <p>Airport:</p>
              </div>
            </div>
            <div>Price: 250</div>
            {/* <p>{flight.route?.visa}</p> */}
            <div className="position-absolute top-100 start-0">
              <Button
                className={styles.checkButton}
                text={'Check The Details'}
              />
            </div>
          </div>
      </div>
    </>
  );
};
