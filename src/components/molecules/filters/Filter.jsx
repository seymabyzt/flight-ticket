import React from "react";
import styles from "./Filter.module.css";

export const Filter = () => {
  return (
    <>
      <div className={styles.filter}>
        {/* Sort By*/}
        <div className="mb-2">
          <h5>Sort By</h5>
          <select className="form-select" aria-label="Default select example">
            <option value="0">lowest Price</option>
            <option value="1">Highest Price</option>
          </select>
          </div>
        <div>
          {/* arrival time */}
          <div className="mb-2">
            <h5>Arrival Time</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                05:00 AM - 11:59 AM
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                12:00 PM - 05:59 PM
              </label>
            </div>
          </div>
          <div>
          </div>
          {/* Stops */}
          <div className="mb-2">
            <h5>Stops</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Non Stop
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                1 Stop
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                2+ Stops
              </label>
            </div>
          </div>
          <div>
          </div>
          {/* Airline Included */}
          <div className="mb-2">
            <h5>Airline Included</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Non Stop
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                1 Stop
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault2" />
              <label
               className="form-check-label" htmlFor="flexRadioDefault2">
                2+ Stops
              </label>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
