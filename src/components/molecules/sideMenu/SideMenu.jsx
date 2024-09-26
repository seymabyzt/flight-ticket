import React from "react";

import styles from "./SideMenu.module.css";
import hotel from '/hotel.jpg';
import travel from '/travel.jpg';
import rentalcar from '/rentalcar.jpg'


export const SideMenu = () => {
    return (
        <>
            <div className="ps-3">
                    <div className="col mb-3">
                        <div className="card w-100 overflow-hidden  rounded-4 shadow-lg" >
                            <img className='w-100 position-relative' src={hotel} alt="hotel" />
                            <h3 className="m-2 text-light position-absolute">HOTELS</h3>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card w-100 overflow-hidden  rounded-4 shadow-lg" >
                            <img className='position-relative w-100' src={rentalcar} alt="hotel" />
                            <h3 className="m-2 text-light position-absolute">CAR RENTALS</h3>
                        </div>
                    </div> <div className="col">
                        <div className="card w-100 overflow-hidden  rounded-4 shadow-lg" >
                            <img className='w-100 position-relative' src={travel} alt="hotel" />
                            <h3 className="m-2 text-light position-absolute">TRAVEL</h3>
                        </div>
                    </div>
                </div>
        </>
    );
};
