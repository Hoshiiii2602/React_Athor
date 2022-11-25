import React from "react";
import Provider from "./Provider";
import App from "../App";

function Global() {
    return (
        <Provider>
            <App />
            <h1>hihi</h1>
        </Provider>
    )
}

export default Global;