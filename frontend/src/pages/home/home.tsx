import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Home Page</h1>
    </div>
  );
};
