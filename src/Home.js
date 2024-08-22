import React, { useState, useEffect } from 'react';

const Home = ({ isLightmode }) => {
  const [homeStyle, setHomeStyle] = useState({
    color: "white",
    backgroundColor: "#0102179e",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const newHomeStyle = {
      color: isLightmode ? "black" : "white",
      backgroundColor: isLightmode ? "" : "#0102179e",
    };
    setHomeStyle(newHomeStyle);
    document.body.style.backgroundColor = isLightmode ? "lavender" : "black";
  }, [isLightmode]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
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
    <div style={{ ...homeStyle, minHeight: "90vh", width:"100%"}}>
      <div className="container Intro" style={{ display: "flex", alignItems: "center", gap: "50px" }}>
        <div style={{ flex: 1 }}>
          <h3>Hello 👋,</h3>
          <h2>I'm <span style={{ color: isLightmode ? "black" : "cyan" }}>Prathamesh Sangale</span></h2>
          <h6>
            <div className='my-2'>
              <strong>
                A passionate and skilled website developer dedicated to creating visually appealing and highly functional websites.
                With a keen eye for design and a deep understanding of web technologies, I bring ideas to life on the web. Explore my work and let's build something great together!
              </strong>
            </div>
          </h6>
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/03/13/40/45/360_F_313404541_e9YZ3pht6oEEkMXuhxTboqXA2B2ShNnC.jpg"
            style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "10px" }}
            alt="Prathamesh Sangale" />
        </div>
      </div>

      <div className='my-3 mx-2' id='icons' style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "left", gap: "15px" }}>
        <i className="fa-brands fa-github fa-2xl" onClick={github} style={{ color: homeStyle.color }}></i>
        <i className="fa-brands fa-linkedin fa-2xl" onClick={linkedin} style={{ color: homeStyle.color }}></i>
        <i className="fa-brands fa-instagram fa-2xl" onClick={instagram} style={{ color: homeStyle.color }}></i>
        <i className="fa-brands fa-facebook fa-2xl" onClick={facebook} style={{ color: homeStyle.color}}></i>
        <button type="button" className="btn btn-primary mx-3" onClick={openModal} style={{backgroundColor: isLightmode?"black":"transparent", color: isLightmode?"white": "cyan", borderRadius:"50px"}}><strong>Contact Me</strong></button>
      </div>

      {isModalOpen && (
        <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block", color: isLightmode ? "black" : "black", backgroundColor: isLightmode ? "rgba(0, 0, 0, 0.5)" : "", paddingTop: "58px" }}>
          <div className="container modal-dialog">
            <div className="modal-content" style={{ backgroundColor: isLightmode ? "navajowhite" : "#3f5a99", border: "2px solid black", boxShadow: isLightmode?"0 0 15px black":"0 0 10px cyan" }}>
              <div className="modal-header" style={{ backgroundColor: isLightmode ? "" : "rgb(112 133 180)", borderBottom: "2px solid black" }}>
                <h1 className="modal-title fs-5" id="exampleModalLabel"><strong><center>Contact Me</center></strong></h1>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{ borderBottom: "2px solid black", backgroundColor: isLightmode ? "" : "rgb(112 133 180)" }}>
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
                    <input 
                      type="text" 
                      minLength={5} 
                      value={message}
                      onChange={handleMessageChange}
                      style={{ border: "1.5px solid black" }} 
                      className="form-control" 
                      id="msg" 
                      aria-describedby="emailHelp" 
                      required 
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ backgroundColor: isLightmode ? "" : "rgb(112 133 180)" }}>
                <button 
                  type="button" 
                  disabled={message.length < 5} 
                  className="btn btn-primary" 
                  style={{ color: isLightmode ? "black" : "white", backgroundColor: isLightmode ? "#b2ad62a3" : "#000000ed", border: isLightmode?"1px solid black":"1px solid white", borderRadius: "50px" }} 
                  onClick={closeModal}
                >
                  <strong>Send</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal backdrop */}
      {isModalOpen && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
    </div>
  );
}

export default Home;
