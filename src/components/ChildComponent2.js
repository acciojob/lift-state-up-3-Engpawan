import React from "react"
import App from "./App"

const Child2 = ({selectedOption, setselectedOption}) =>{
    return(
        <div>
            <h1>Child Component 2</h1>
            <button onClick={() =>{
                setselectedOption("Option 2")
            }}>Option 2</button>
        </div>
    )
}

export default Child2