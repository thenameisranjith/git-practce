import React from "react";

const Card = (props) => {
  const { title, children } = props;
 // it recives title and children props
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
