import React, { useEffect, useState } from 'react';

const Navbar = ({ isLightmode, toggle }) => {
  const [mystyle, setMystyle] = useState({
    color: "white",
    backgroundColor: "rgb(6, 8, 31)"
  });

  useEffect(() => {
    if (isLightmode) {
      setMystyle({
        color: "black",
        backgroundColor: "rgb(176, 162, 162)"
      });
    } else {
      setMystyle({
        color: "white",
        backgroundColor: "rgb(10 14 47)"
      });
    }
  }, [isLightmode]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navtop" style={mystyle}>
      <div className="container-fluid">
        <img src="https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-White-Dark-Background-Logo.wine.svg" style={{ height: "40px", width: "50px", paddingLeft: "10px" }} alt="" />
        <a className="navbar-brand mx-3" href="#home" style={{color: isLightmode?"black":"white"}}><strong>Prathamesh Sangale</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="container mx-5 navbar-nav me-auto mb-2 mb-lg-0 " style={{ display: "flex", justifyContent: "right", gap: "1rem", padding: "0", fontSize: "large" }}>
            <li className="nav-item">
              <a className="nav-link mx-5" style={{color: isLightmode?"black":"white"}} aria-current="page" href="#home"><strong>Home</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" style={{color: isLightmode?"black":"white"}} href="#about"><strong>About</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" style={{color: isLightmode?"black":"white"}} aria-current="page" href="#skills"><strong>Skills</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" style={{color: isLightmode?"black":"white"}} aria-current="page" href="#contact"><strong>Contact</strong></a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <i className="fa-regular fa-moon fa-xl fa-regular fa-star fa-4xs mx-4" style={{color: isLightmode?"black":"white"}} onClick={toggle} ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
