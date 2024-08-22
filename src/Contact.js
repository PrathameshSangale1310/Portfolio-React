import React, { useState } from 'react';

const Contact = ({ isLightmode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const github = () => {
    window.location.href = "https://github.com/PrathameshSangale1310";
  };

  const linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/prathamesh-sangale-10b91b237/";
  };

  const instagram = () => {
    window.location.href = "https://www.instagram.com/prathamesh_sangale_1310/?next=%2F";
  };

  const facebook = () => {
    window.location.href = "https://www.facebook.com/prathamesh.sangale.562";
  };

  return (
    <div style={{ backgroundColor: isLightmode ? "" : "#0102179e" }}>
      <div style={{ backgroundColor: isLightmode ? "" : "#0102179e" }}>
        <div className='my-3' style={{ cursor: "pointer", color: isLightmode ? "black" : "white", display: "flex", alignItems: "center", justifyContent: "center", gap: "25px" }}>
          <i className="fa-brands fa-github fa-2xl" onClick={github}></i>
          <i className="fa-brands fa-linkedin fa-2xl" onClick={linkedin}></i>
          <i className="fa-brands fa-instagram fa-2xl" onClick={instagram}></i>
          <i className="fa-brands fa-facebook fa-2xl" onClick={facebook}></i>
          <button type="button" className="btn btn-primary" onClick={openModal} style={{backgroundColor: isLightmode?"black":"transparent", color: isLightmode?"white": "cyan", borderRadius:"50px"}}>
            <strong>Contact Me</strong>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block",color: isLightmode ? "black" : "black", backgroundColor: isLightmode ? "rgba(0, 0, 0, 0.5)" : "", paddingTop: "58px" }}>
          <div className="container modal-dialog">
            <div className="modal-content" style={{ backgroundColor: isLightmode ? "navajowhite" : "#3f5a99", border: isLightmode?"2px solid black":"2px solid white", boxShadow: isLightmode?"0 0 15px black":"0 0 10px cyan" }}>
              <div className="modal-header" style={{ backgroundColor: isLightmode ? "" : "#050505b5", borderBottom: isLightmode?"2px solid black":"2px solid white", color: isLightmode?"":"white"}}>
                <h1 className="modal-title fs-5" id="exampleModalLabel"><strong><center>Contact Me</center></strong></h1>
                <button type="button" style={{color: isLightmode ? "black" : "white", backgroundColor:"white"}} className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{ borderBottom: isLightmode?"2px solid black":"2px solid white", backgroundColor: isLightmode ? "" : "#050505b5", color: isLightmode?"":"white"}}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><h6>Full Name</h6></label>
                    <input type="text" style={{ border: "1.5px solid black" }} className="form-control" id="name" aria-describedby="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><h6>Email address</h6></label>
                    <input type="email" style={{ border: "1.5px solid black" }} className="form-control" id="exampleInputEmail1" aria-describedby="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="no" className="form-label"><h6>Contact No.</h6></label>
                    <input type="tel" style={{ border: "1.5px solid black" }} className="form-control" id="no" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="msg" className="form-label"><h6>Message</h6></label>
                    <input type="text" style={{ border: "1.5px solid black" }} className="form-control" id="msg" aria-describedby="emailHelp" />
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ backgroundColor: isLightmode ? "" : "#050505b5" }}>
                <button type="button" className="btn btn-primary" style={{ color: isLightmode ? "black" : "white", backgroundColor: isLightmode ? "#b2ad62a3" : "rgb(97 84 143 / 93%)", border: isLightmode?"1px solid black":"1px solid white", borderRadius: "50px" }} onClick={closeModal}><strong>Send</strong></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal backdrop */}
      {isModalOpen && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
    </div>
  );
};

export default Contact;
