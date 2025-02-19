import React from 'react';
import './style.css';
import TechnologyInfo from './technologies.json';

function Technology({ data }) {
  return (
    <div className="col">
      <img src={data.imageURL} width={75} height={75} />
      <h4>{data.name}</h4>
      <p>{data.description}</p>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="container">
      <div className="row">
        {TechnologyInfo.map((info) => {
          return <Technology data={info} />;
        })}
      </div>
    </div>
  );
}
