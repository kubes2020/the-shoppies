import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>The Shoppies</h1>
      <Link to="/search">Let's get started!</Link>
    </>
  );
}
