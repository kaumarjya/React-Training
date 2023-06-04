import React, { useEffect } from "react";

function Child({ returnComment }) {
 
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  },[]);

  return <h1>{returnComment({day:"sunday",month:"June"})}</h1>;
}

export default Child;
