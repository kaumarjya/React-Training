import "./style/App.css";

function App(colorProps) {
  //const _color = colorProps.color;
  //const _day = colorProps.day;
  const { color, day, mylist } = colorProps;

    const mystyle={
      fontSize:"1.2rem",
      color:"green",
      marginTop:"2rem"
    }
    
  const items = mylist ? mylist.map((list) => <li className={mystyle.color} key={list}>{list}</li>) : "";

  return (
    <div>
      <p>-----------------</p>

      {
      
          color ? <h1>My favourite color is : {color}</h1>: ""
      
      }
    
      {day ? <h2>Today is {day}</h2> : ""}
      <ul>{items}</ul>
    </div>
  );
}

export default App;
