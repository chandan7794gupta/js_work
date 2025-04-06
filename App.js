// creating html elemnet using react
const heading = React.createElement(
    "h1",
    {id : "heading", abc : "abc"},
    "hello from react");
// create root React render all the compoenent elemnt inside root only
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


// render multiple element
const parent = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement("div", {id : "child"}, [
                React.createElement("h1", {}, "headin 1"),
                React.createElement("h2", {}, "headin 2")
            ],
        ),
        React.createElement("div", {id : "child-2"}, [
                React.createElement("h1", {}, "headin 1"),
                React.createElement("h2", {}, "headin 2")
            ],
        )
    ]
)

root.render(parent);