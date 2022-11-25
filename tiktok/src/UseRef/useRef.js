import {useRef, useState } from "react";



function UseRef() {

    const [count, setCount] = useState(60);
    let coundown = useRef();
    const handleStart = () => {
         coundown.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000)

    }

    const handleStop = () => {
        clearInterval(coundown.current);
    }


    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default UseRef;
