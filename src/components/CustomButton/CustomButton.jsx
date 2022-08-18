import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.scss";

import { saveAs } from "file-saver";

const DownloadImage = () => {
  const download = () => {
    saveAs(
      "https://drive.google.com/file/d/1GMgudXGqdwRMBouYBUxeKB4s087Jk5B-/view?usp=sharing"
    ); 
  };

  return (
    <button className="button" onClick={download}>
      Download Resume
    </button>
  );
};

const CustomButton = ({
  text,
  route,
  downloadCv,
  extraStyle,
  projectLink,
  projectUrl,
  githubLink,
  githubUrl,
}) => {
  return (
    <div
      className={!extraStyle ? "buttonContainer" : "buttonContainer extraStyle"}
    >
      {downloadCv ? (
        <DownloadImage />
      ) : projectUrl ? (
        <a href={projectUrl} rel="noreferrer" target="_blank">
          <button className="button">
            {text}
          </button>
        </a>
      ) : githubUrl ? (
        <a href={githubUrl} rel="noreferrer" target="_blank">
          <button className="button">
            {text}
          </button>
        </a>
      ) : (
        <Link to={route}>
          <button className="button">{text}</button>
        </Link>
      )}
    </div>
  );
};

export default CustomButton;
