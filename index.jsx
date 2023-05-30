import * as ReactDOM from "react-dom";
import * as React from "react";

function Application() {
    return <h1>Mikkels Movie Database</h1>
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);