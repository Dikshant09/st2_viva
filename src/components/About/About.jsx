import React from "react";
import { images } from "../../constants";
import CustomButton from "../CustomButton/CustomButton";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__about">
        <div className="textContainer">
          <div className="textCard">
            <p style={{ display: "inline" }}>This is </p>
            <p
              style={{
                display: "inline",
                color: "#01bdae",
                marginLeft: "0.5rem",
              }}
            >
              ST2 Viva
            </p>
            <p>and</p>
            <p style={{ display: "inline", color: "#01bdae" }}>
              More
              <br />
              <br />
            </p>
          </div>
          <div>
            <CustomButton text="Go Back" route="/" />
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
