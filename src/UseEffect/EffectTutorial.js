import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  /*
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );*/
/*
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count)=>count+1);
    },1000);
  });
  return(
    <>
    <p>{count} times</p>
    </>
  )*/
  const [count, setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(()=>count*2)
  },[count]);
  return(
    <>
    <p>Count:{count}</p>
    <button onClick={()=>setCount((c)=>c+1)}>+</button>
    <p>Cal:{calculation}</p>
    </>
  )
}

export default EffectTutorial;
