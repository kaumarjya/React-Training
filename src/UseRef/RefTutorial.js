import React, { useEffect, useRef, useState } from "react";

function RefTutorial() {
  /*
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );*/
  /*

  const [inputVal, setInputValue] = useState("");
  const count = useRef(0);
  useEffect(() => {
    console.log( count)
    count.current = count.current + 1;
  });
  return (
    <>
    <input type="text" value={inputVal}
    onChange={(e)=>setInputValue(e.target.value)}/>
    <h1>COunt :{count.current}</h1>
    </>
  )*/
  const [inputVal,setInputVal] = useState("");
  const prevVal = useRef("");
  useEffect(() => {
    console.log(inputVal)
    prevVal.current=inputVal
    console.log(prevVal)
    
  },[inputVal]);
  return (
    <>
    <input type="text" value={inputVal}
    onChange={(e)=>setInputVal(e.target.value)}/>
    <h1>Current Val :{inputVal}</h1>
    <h2>Prev Val:{prevVal.current}</h2>
    </>
  )
}

export default RefTutorial;
