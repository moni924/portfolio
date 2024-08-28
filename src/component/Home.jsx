import React from "react";
import "../App.css";
import amico from "./amico.png";

function Home() {
  return (
    <div className="container">
      <div className="home-container col-md-12 col-xl-6">
        <img src={amico} alt="Description" height="300px" />
          <h1>Hi, I'm Monithavaisali!</h1>
        <h2>Front End Developer</h2>
      </div>
    </div>
  );
}

export default Home;
