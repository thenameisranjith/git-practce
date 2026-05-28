import Card from "../components/Card";
import Welcome from "../components/Welcome";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const Invite = () => {
  const lang = useContext(LangContext);
  //console.log(lang);
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
