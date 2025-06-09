import React from "react";
import ReactDOM from "react-dom/client";

//react element
const Title=() => (<h1 className="head" tabIndex="1">
     Namaste React using JSX
     </h1>
);


//react component
//class based component - old
// functional component - new

const HeadingComponent = ()=> (    
<div id="container">
     {/* component composition */}
     <Title />
     <h1 className="heading">Namaste React functional component</h1>
     </div>

);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent/>);