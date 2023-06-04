import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      console.log(name)
      return data + name.month;
    },
    [data]
  );

  return (
    <div className="App">

      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
     
        Toggle
      </button>
      {toggle && <h1> Hi There </h1>}
    </div>
  );
}
