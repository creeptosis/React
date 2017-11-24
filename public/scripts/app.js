console.log("app.js is running!");

//JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>

var template = React.createElement( //this is what happens behind the scenes
  "p",
   { id: "someid"},
    "Something new");

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
