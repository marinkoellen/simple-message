import React from "react";



function App() {

  // const message = "Javascript is AWESOME";
  const [message, setMessage] = React.useState("Default value of message variable");

  function handleClick(){
    setMessage("my new message")
  }


  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button> 
    </div>
  ); 
}


export default App;


