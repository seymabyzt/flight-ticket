import React, { useEffect, useState } from "react";
import { Button } from '../../atoms/buttons/Button';
import styles from "./Navbar.module.css";
import logo from '../../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../../mediaQuery";

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

  const isActive = useMediaQuery('(max-width: 460px)');

  return (
    <>
      <div className={styles.header}>
        {isActive ? (
          <MobileNavbar toggleTheme={toggleTheme} />
        ) : (
          <DesktopNavbar toggleTheme={toggleTheme} />
        )}
      </div>
    </>
  );
};

const MobileNavbar = ({ toggleTheme }) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center pb-4">
        <div className="d-flex align-items-center">
          <img src={logo} className={styles.logo} alt="logo" />
          <NavLink className={styles.logoName} to="/"><h1 className="mb-0">Plane Scape</h1></NavLink>
        </div>
        <button className={styles.Button} typeof="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightNavbar" aria-controls="offcanvasRight"><i className="bi bi-list"></i></button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRightNavbar" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <button typeof="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className={styles.NavbarList}>
              <li className="mx-3"> 
                <Button onClick={toggleTheme} className={styles.ThemeButton} text={
                <>
                  <i className="bi bi-brightness-high-fill"></i>/
                  <i className="bi bi-moon-stars-fill"></i>                      </>
              } />
              </li>
              <li className="mx-3 d-flex">
                <i className="bi-person"></i>
                <h4 className="ms-2">Deals</h4> 
              </li>
              <li className="mx-3 d-flex">
                <i className="bi-person"></i>
                <h4 className="ms-2">Discover</h4> 
              </li>
              <li className="mx-3">
                <i className="bi bi-person-circle"></i>
                <NavLink to="/myflights" className="ms-2 fs-4">My Flights</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}
const DesktopNavbar = ({ toggleTheme }) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center pb-4">
        <div className="d-flex align-items-center">
          <img src={logo} className={styles.logo} alt="logo" />
          <NavLink className={styles.logoName} to="/"><h1 className="mb-0">Plane Scape</h1></NavLink>
        </div>
        <ul className="list-unstyled d-flex align-items-center mb-0">
          <li className="mx-3"> <Button onClick={toggleTheme} className={styles.ThemeButton} text={
            <>
              <i className="bi bi-brightness-high-fill"></i>/
              <i className="bi bi-moon-stars-fill"></i>                      </>
          } />
          </li>
          <li className="mx-3 d-flex align-items-center">
            <i className="bi-person fs-4"></i>
            <h4 className="mb-0 ms-1">Deals</h4>
          </li>
          <li className="mx-3 d-flex align-items-center">
            <i className="bi-person fs-4"></i>
            <h4 className="mb-0 ms-1">Discover</h4>
          </li>
          <li className="mx-3">
            <i className="bi bi-person-circle fs-4"></i>
            <NavLink to="/myflights" className="fs-4 ms-1">My Flights</NavLink>
          </li>
        </ul>

      </div>
    </>
  )
}