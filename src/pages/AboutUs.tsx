import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us">
      <h1 className="center">About Us</h1>
      <p className="center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro
        quis quas iste modi. Sed, possimus ullam? Recusandae mollitia dolorem
        voluptates quibusdam repellat rem animi, unde labore ipsum totam dolor.
      </p>
      <button className="btn" onClick={() => navigate(`/`)}>
        Back to Todo-List
      </button>
    </div>
  );
};

export default AboutUs;
