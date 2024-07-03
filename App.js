const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Wow I am H1 tag nested for some reason")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
