import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  changeName,
} from "../features/counter/counterSlice";
import { UserContext } from "../context/userContext";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const { user, setUser } = useContext(UserContext);

  console.log("COUNT VALUE IS ", user);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <h1>{count}</h1>

      <button onClick={() => dispatch(changeName("Nami"))}>Change Name</button>
      <h3>{!name ? user : name}</h3>
    </div>
  );
};

export default Counter;
