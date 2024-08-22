import React, { useEffect, useState } from 'react';
import mynewpic1 from './mynewpic1.jpg';

const About = ({ isLightmode }) => {
  const [aboutStyle, setAboutStyle] = useState({
    color: "white",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    gap: "3rem",
    padding: "2rem",
  });

  // This useEffect updates the color and backgroundColor when isLightmode changes
  useEffect(() => {
    const newStyle = {
      ...aboutStyle,
      color: isLightmode ? "black" : "white",
      backgroundColor: isLightmode ? "" : "#0102179e"
    };
    setAboutStyle(newStyle);
    // eslint-disable-next-line
  }, [isLightmode]); // The effect runs every time isLightmode changes

  return (
    <div style={aboutStyle}>
      <div className='container' style={{ paddingTop: "150px" }}>
        <img src={mynewpic1} style={{ height: "375px", width: "350px", borderRadius: "50%", border: isLightmode?"2px solid black":"" }} alt="" />
      </div>
      <div className="about-container">
        <h2 style={{ color: isLightmode ? "black" : "cyan" }}><strong>About Me</strong></h2>
        <p>Hello! I'm Prathamesh Sangale, a passionate web developer with a strong foundation in web development. I specialize in creating dynamic and responsive websites that provide seamless user experiences. I hold a degree in Computer Science, where I developed a deep understanding of algorithms, data structures, and software design. My education laid the foundation for my career in web development.</p>

        <h2 style={{ color: isLightmode ? "black" : "cyan" }}><strong>Skills & Expertise</strong></h2>
        <p>Over the years, I've honed my skills in front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks such as Node.js and Express.js. My proficiency in ReactJS allows me to build interactive user interfaces, while my experience with databases like MongoDB and SQL ensures that my applications are scalable.</p>

        <h2 style={{ color: isLightmode ? "black" : "cyan" }}><strong>Passions & Interests</strong></h2>
        <p>I'm passionate about staying updated with the latest web technologies and trends. I love experimenting with new tools and frameworks to push the boundaries of what's possible on the web. In my free time, I enjoy exploring the intersection of technology and design.</p>

        <h2 style={{ color: isLightmode ? "black" : "cyan" }}><strong>When I'm not coding...</strong></h2>
        <p>When I'm not immersed in coding, I enjoy exploring nature, playing Cricket, watching Movies, and engaging in photography. These hobbies help me maintain a balanced and creative approach to life and work.</p>
      </div>
    </div>
  );
};

export default About;
