import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>The Shoppies</h1>
      <Link to="/search">Let's get started!</Link>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1614881840774-f811c9c92d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"></img>
      </div>
    </div>
  );
}
