import "./App.css";
import React from "react";
function App() {
  var name = "laiba azeem";
  const userId = 18;
  // const email = prompt("enter your email");
  console.log(name);
  // if (userId >= 18) {
  //   alert("allowed");
  // } else {
  //   alert("not allowed");
  // }
  var array = [1,2,3,4,5,6,8,9,10]
  for(let i = 0;i<array.length;i++){
    console.log(array[i])
  }
  return (
    <>
    {array.map((item)=>{
      return(
        <h1>{item}</h1>
      )
    })}
      {/* {name === "laiba azeem" ? (
        <div>
          <h1 className="bg-gray-900 text-white p-5">{`${name} ${userId}`}</h1>
          <h1>{userId}</h1>
        </div>
      ) : (
        <h1>not allowed</h1>
      )} */}


    </>
  );
}

export default App;
