import logo from "../assets/icons/horizontal.jpg";
import Footer from "./Footer";
import "../css/style.css";
import {  Outlet } from "react-router-dom";

import { Link, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
 

  return (

    
    <>
      <header>
        <nav
          className="navbar d-flex navbar-expand-lg navbar-light fixed-top "
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div className="container-fluid new p-1" >
            <Link
              
              className= " w-sm-100 w-md-25 logonav position-md-absolute left-md-5"
              to="/"
            >
              <img
                src={logo}
                alt=""
                className="position-md-relative w-sm-100 w-md-75"
              ></img>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse mt-4 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                <li className="nav-item">
                  <Link
                    className={`efecto nav-link mx-2 fw-medium  fs-5  ${location.pathname === '/' ? ' encender' : ''}`}
                   
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className= {`efecto nav-link mx-2 fw-medium fs-5   ${location.pathname === '/about' ? 'encender ' : ''}`} 
                    to="about"
                  >
                    Acerca de Nosotros
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    className=  {`efecto nav-link fw-medium fs-5 mx-2      ${location.pathname === '/contactos' ? 'encender ' : ''}`} 
                    to="contactos"
                  >
                    Contactos
                  </Link>
                </li>
              </ul>
              <div className="ps-lg-5">
                <Link
                  to={"/login"}
                  className="btn  btn-lg mx-2  rounded-pill order-0 fs-5 me-5  BotonInicio principal "
                >
                  Inicio Sesion
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
