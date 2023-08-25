/* <div id="parent">
    <div id='child'>
        <h1>Once again i created h1 tag</h1>
        <h3>Ohh i soo small than h1 tag</h3>
    </div>
<div id='child2'>
        <h1>I'm the h1 tag</h1>
        <h1>I'm the other h1 tag</h1>
    </div>
</div> */

const createDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Once again i created h1 tag"),
    React.createElement("h3", {}, "Ohh i soo small than h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Once again i created h1 tag"),
    React.createElement("h3", {}, "Ohh i soo small than h1 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createDiv);
