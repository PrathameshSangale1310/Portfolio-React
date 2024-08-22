import React from 'react';

const Skills = ({title, tptext, isLightmode}) => {



  return (
    <>
    <div className="col-md-4 d-flex justify-content-center mb-4 skillcard" /*style={{backgroundColor: isLightmode?"#ece9e9":"#0103299e"}}*/>
      <div className="card my-3 " style={{ width: "250px", backgroundColor: isLightmode?"#ece9e9": "rgb(90 83 92 / 28%)", color: isLightmode?"black":"white", border: isLightmode?"1px solid black":"1px solid cyan", boxShadow: isLightmode?"0 0 15px black":"0 0 15px rgba(0, 255, 255, 0.5)" 
   }}>

        <div className="card-body" style={{color: isLightmode?"black":"white"}}>
          <h5 className="card-title" ><center><h1><strong>{title}</strong></h1></center></h5>
          <p className="card-text" >{tptext}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
