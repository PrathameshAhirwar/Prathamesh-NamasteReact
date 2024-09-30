import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"This is Namaste React"),
    React.createElement("h2",{},"I am an h2 tag")
]),React.createElement("div",{id:"parent2"},React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")
]))
)


const heading = React.createElement("h1",{id:"heading"},"Hello World From React!")

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
// root.render(heading) 