import React, { useState } from "react";
import Child1 from "./ChildComponent1.js";
import Child2 from "./ChildComponent2.js";
import './../styles/App.css';


const App = () => {
  const[selectedOption, setselectedOption] = useState("")
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <Child1 selectedOption={selectedOption} setselectedOption={setselectedOption}/>
        <Child2 selectedOption={selectedOption} setselectedOption={setselectedOption}/>
        <div>
          Selected Option: {selectedOption}
          
        </div>
    </div>
  )
}

export default App
