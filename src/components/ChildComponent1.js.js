import React from "react"
const ChildComponent1 = ({selectedOption, setselectedOption}) =>{
    return(
        <div>
            <h1>Child Component 1</h1>
            <button onClick={() =>{
                setselectedOption("Option 1")
            }}>Option 1</button>
        </div>
    )
}

export default ChildComponent1