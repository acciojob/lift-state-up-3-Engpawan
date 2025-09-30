import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1.js";
import ChildComponent2 from "./ChildComponent2.js";
import './../styles/App.css';


const App = () => {
  const[selectedOption, setselectedOption] = useState("")
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 selectedOption={selectedOption} setselectedOption={setselectedOption}/>
        <ChildComponent2 selectedOption={selectedOption} setselectedOption={setselectedOption}/>
        <p>
          Selected Option: {selectedOption}
          
        </p>
    </div>
  )
}

export default App
