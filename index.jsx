import * as ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./src/App"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)