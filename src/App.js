import React from "react"
import "./style.css"
import Button from "./Components/Button/Button.js"


const App = ()=>{
    return(
        <div>
          <h1 style={{textAlign: "center"}}> Hey Everyone </h1>
           <Button />
        </div>
    )
}





export default App



// Named Export

// export const SayHi = ()=>{
//     return(
//         <div>
//           <h1 style={{textAlign: "center"}}> Hey Everyone </h1>
//           <button className="button"> Apple</button>
//           <button className="button"> Manago</button>
//           <button className="button"> Gauva</button>
//         </div>
//     )
// }

