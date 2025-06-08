import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement=> js object => htmlelement(render) 
// const heading=  React.createElement("h1",{id:"heading"}, "namaste react");

//jsx - is html/xml-like syntax => parcel - babel
// jsx=>react.createElement=>reactElement-js-obj=>htmlElement(render) 
const jsxheading = (<h1 className="head" tabIndex="1">
     Namaste React using JSX
     </h1>
     );
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);