import React from "react";
import ReactDOM from "react-dom/client";

// const createDiv = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Once again i created h1 tag"),
//     React.createElement("h3", {}, "Ohh i soo small than h1 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Once again i created h1 tag"),
//     React.createElement("h3", {}, "Ohh i soo small than h1 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(createDiv);

// Component 01

const Title = () => (
  <h1 className="head" tabIndex="5">
    This is functional component
  </h1>
);

const element = <span>custom span tag</span>;

const Heading = () => (
  <div id="container">
    {element}
    {<Title />}
    {100 + 200}
    {console.log("qwertyuiop")}
    {<h3>this is code injected by using crly braces</h3>}
    <h1 className="heading">This is Functional composition </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
