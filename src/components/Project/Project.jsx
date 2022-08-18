import React from "react";
import images from "../../constants/images";
import "./Project.scss";

const Project = ({ project }) => {
  const {  projectUrl } = project;
  return (
    <>
      <div className="projectContainer">
        <img className="imageBro" src={images[project.imgUrl]} alt='Project Image'/>
        <div className='title'>
          <h3 style={{ color: '#000000' }}>{project.title}</h3>
        </div>
      </div>
    </>
  );
};

export default Project;
