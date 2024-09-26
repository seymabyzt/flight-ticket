import React, { useEffect, useState } from "react";
import { Button } from '../../atoms/buttons/Button';
import styles from "./Navbar.module.css";
import logo from '../../../assets/logo.svg'
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  // Tema değişikliğini burada yapıyorum.
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <>
        <div className={styles.header}>
      <div className="container-fluid d-flex justify-content-between align-items-center pb-4">
          <div className="d-flex align-items-center">
          <img src={logo} className={styles.logo}  alt="logo" />
        <NavLink className={styles.logoName} to="/"><h1 className="mb-0">Plane Scape</h1></NavLink>
          </div>
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li className="mx-3"> <Button onClick={toggleTheme} text={
                      <>
                     <i className="bi bi-brightness-high-fill"></i>/
                       <i className="bi bi-moon-stars-fill"></i>                      </>
                    }/>
            </li>
            <li className="mx-3">
              <i className="bi-person"></i>
              Deals
            </li>
            <li className="mx-3">
              <i className="bi-person"></i>
              Discover
            </li>
            <li className="mx-3">
              <i className="bi bi-person-circle"></i>
              <NavLink to="/myflights">My Flights</NavLink>
            </li>
          </ul>
         
        </div>
      </div>
    </>
  );
};
