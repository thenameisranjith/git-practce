import React from "react";
import Card from "../components/Card";
import Welcome from "../components/Welcome";
const Invite = () => {
  return (
    <div>
      <Welcome name="john" age={34} />
      <Card title="Onboarding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          aperiam numquam eveniet, sequi autem consequatur! Pariatur officiis
          quasi omnis, accusamus architecto tempore labore quae repellat ex ea.
          Hic, sed delectus.
        </p>
      </Card>
    </div>
  );
};

export default Invite;
