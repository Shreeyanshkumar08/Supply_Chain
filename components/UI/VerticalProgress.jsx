import React from "react";

const VerticalProgress = ({ data, title = "Title" }) => {
  return (
    <div className="w-1/3 mx-8">
      <h1
        className="text-xl font-semibold font-mono text-center
       ml-8 text-sec-dark"
      >
        {title}
      </h1>
      <ul className="steps steps-vertical">
        {data.map((el) => (
          <li className="step step-primary" key={el.id}>
            <div className="py-4">{el.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalProgress;
