import React from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

function Projects() {
  return (
    <center>
      <div className="container">
        <div className="project col-md-12 col-xl-6">
          <h2>Projects</h2>

          <div className="project">
            <h3>1.KFC Landing Page</h3>
            <p>
              This project involved designing a modern and responsive landing
              page for KFC, showcasing their latest promotions and menu items.
              The focus was on creating a user-friendly interface with engaging
              visuals.
            </p>
            <img src={img1} alt="Description" height="150px" />
            <img src={img2} alt="Description" height="200px" />
            <img src={img3} alt="Description" height="150px" />
          </div>

          <div className="project">
            <h3>2.Personal Portfolio</h3>
            <p>
              This portfolio website highlights my skills. It serves as a
              comprehensive showcase of my projects and provides a platform for
              potential clients and employers to learn more about my expertise.
            </p>
            <img src={img4} alt="Description" height="250px" />
          </div>
        </div>
      </div>
    </center>
  );
}

export default Projects;
