import React from 'react';
import './oct.css';

function OctagonWithImage(props) {
  const { title, descriptionText, author } = props;

  return (
    <div className="octagon-container">
      <div className="octagon">
        <div className="octagon-content">
          <h4 className="title">{title}</h4>
          <p className="descriptionText">{descriptionText}</p>
          <p className="author">{author}</p>
        </div>
        <div className="inner-octagon"></div>
      </div>
    </div>
  );
}

export default OctagonWithImage;