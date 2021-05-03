import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Home() {
  return (
    <>
      <h1>The Shoppies</h1>
      <Link to="/search">Let's get started!</Link>
    </>
  );
}
