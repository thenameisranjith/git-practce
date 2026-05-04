import React from "react";

const Welcome = (props) => {
  const { name, age } = props;
  return (
    <div>
      Welcome ,{name} your age is {age}
    </div>
  );
};

export default Welcome;
