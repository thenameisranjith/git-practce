import React from "react";

const Welcome = (props) => {
  const { name, age } = props;
  // this is the first page
  return (
    <div>
      Welcome ,{name} your age is {age}
    </div>
  );
};

export default Welcome;
