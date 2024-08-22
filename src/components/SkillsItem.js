import React from 'react';
import Skills from './Skills';

const SkillsItem = ({isLightmode}) => {

  
  
  return (
    <>
      <div className='container'>
        <div className='row my-3 skillbg'>
          <h1 style={{color: isLightmode?"black":"white", paddingBottom:"15px"}}><center><strong>Skills</strong></center></h1>
          <Skills isLightmode={isLightmode} title="C" tptext="I have a strong foundation in C programming, which has honed my understanding of low-level memory management, data structures, and algorithms. Through C, I've developed a deep understanding of pointers, dynamic memory allocation, and manual memory management." />

          <Skills isLightmode={isLightmode} title="C++" tptext="Proficient in C++, I have leveraged its object-oriented features to build robust and scalable software solutions. Additionally, my expertise with the Standard Template Library (STL) enables me to write robust, maintainable code using its powerful algorithms and data structures." />

          <Skills isLightmode={isLightmode}title="OOPS" tptext="Object-Oriented Programming (OOP) is at the heart of my software development approach. By applying OOP principles such as encapsulation, inheritance, and polymorphism, I create modular, reusable code that is easy to maintain and extend." />

          <Skills isLightmode={isLightmode}title="HTML" tptext="HTML is the backbone of my web development projects. I use it to structure content on the web, ensuring that each element is semantically correct and accessible. My HTML skills are complemented by a deep understanding of web standards." />

          <Skills isLightmode={isLightmode}title="CSS" tptext="CSS allows me to bring creativity to my web projects. I use it to design responsive, visually appealing user interfaces that enhance the user experience. My CSS skills ensure a polished final product." />

          <Skills isLightmode={isLightmode}title="Bootstrap" tptext="I am proficient in Bootstrap, a powerful front-end framework that I use to create responsive and mobile-first web designs. With its extensive library of pre-built components and flexible grid system, I efficiently develop layouts that are both consistent and visually appealing across various devices." />

          <Skills isLightmode={isLightmode}title="JS" tptext= "JavaScript is my go-to language for adding interactivity to web pages. With it, I can create dynamic and responsive user experiences, from simple form validations to complex single-page applications. JavaScript is at the core of my development toolkit." />

          <Skills isLightmode={isLightmode}title="React JS" tptext="ReactJS has been instrumental in building modern, scalable web applications. I utilize React's component-based architecture to create reusable UI elements and manage the application state effectively, resulting in fast and maintainable codebases." />

          <Skills isLightmode={isLightmode}title="Node JS" tptext= "Node.js allows me to build high-performance, scalable server-side applications using JavaScript. I have used Node.js to develop and handle asynchronous operations, and create real-time applications with ease." />

          <Skills isLightmode={isLightmode}title="Express JS" tptext="Express.js simplifies my backend development with Node.js. I use it to build robust APIs and handle server-side logic efficiently. Its minimalist framework enables me to create flexible, maintainable, and production-ready applications." />

          <Skills isLightmode={isLightmode}title="SQL" tptext="SQL is essential for my work with relational databases. I use it to design, query, and manage databases efficiently, ensuring data integrity and optimizing performance. My SQL skills are crucial for backend development and data-driven applications." />

          <Skills isLightmode={isLightmode}title="MongoDB" tptext="MongoDB's flexibility and scalability make it my preferred NoSQL database for modern web applications. I use MongoDB to store and manage data in a way that adapts to the evolving needs of the application, making it ideal for handling large datasets." />
        </div>
      </div>
    </>
  );
}

export default SkillsItem;

