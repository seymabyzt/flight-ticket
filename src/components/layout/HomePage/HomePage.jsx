import React from "react";
import { Filter } from "../../molecules/filters/Filter";
import { Tickets } from '../../molecules/tickets/Tickets';
import styles from "./HomePage.module.css";
import { SearchArea } from "../../molecules/searchArea/searchArea";

export const HomePage = ({ allFlightsData }) => {
  return (
    <>
      <div className={styles.searchArea}> 
            <SearchArea></SearchArea>
          </div>
      <div className={styles.homePage}>
          <div className={styles.homePageLeft}>
            <Tickets allFlightsData={allFlightsData}></Tickets>
          </div>
          <div className={styles.homePageRight}>
            <Filter></Filter>
          </div>
      </div>
    </>
  );
};
