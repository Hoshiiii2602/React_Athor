import {memo, useState } from "react";


function Memo() {

    const [count, setCount] = useState(0);
    
    const handleIncre = () => {
     setCount(count+1);
    }


    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={handleIncre}>Stop</button>
        </div>
    )
}

export default memo(Memo)
