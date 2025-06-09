import React from "react";
import ReactDOM from "react-dom/client";


const title=(
 <h1 className="head" tabIndex="1">
     Namaste React using JSX
     </h1>
);
const Title=()=>(
 <h1 className="head" tabIndex="1">
     Namaste React using JSX
     </h1>
);


const HeadingComponent = ()=> (    
<div id="container">
     {Title()}
     <Title></Title>
     <h1 className="heading">Namaste React functional component</h1>
     </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent/>);