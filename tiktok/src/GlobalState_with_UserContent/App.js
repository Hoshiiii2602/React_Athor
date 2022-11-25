import React from "react";
import { useContext } from "react";
import Context from "./Context";

function App() {

    const state = useContext(Context);
    console.log(state);
    return (
        <div>Xin chaof</div>
    )
}

export default App;