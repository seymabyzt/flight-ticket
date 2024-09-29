import React from "react";
import styles from "./SearchArea.module.css";
import { Input } from "../../atoms/inputs/Input";
import { Labels } from '../../atoms/labels/Labels';
import { Button } from "../../atoms/buttons/Button";


export const SearchArea = () => {

  return (
    <>
      <div className={styles.searchArea}>
        <div className={styles.searchAreaHeader}>
          <div className="d-flex align-items-center">
            <i className="bi bi-airplane-fill"></i>
            <h4 className="mb-0 mx-2">BOOK YOUR FLIGHT</h4>
          </div>
          <div>
            <Button className={styles.roadTripButton} text={'Road Trip'}></Button>
            <Button className={styles.oneWayButton}  text={'One Way'}></Button>
          </div>
        </div>
        <div className={styles.searchAreaInputs}>
          <div className="me-3">
            <Input type="text" className={styles.departures} placeholder="Departures"/>
            <Input type="text" className={styles.arrivals} placeholder="Arrivals"></Input>
          </div>
          <div>
            <Input className={styles.dateInput} type="date"/>
            <Input className={styles.dateInput1} type="date"/>
          </div>
        </div>
        <div>
          <Button text={'Show Flights'}></Button>
        </div>
      </div>
    </>
  );
};
