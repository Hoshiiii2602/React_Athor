import {  useReducer } from "react";


// 1. init state : 0
// 2. action : up(state + 1)/ down(state - 1)
// 3. reducer
// 4. dispatch




// init state 
const initState = 0
// actions
const Up_Action = ''
const Down_Action = ''
// reducer
const reducer = (state, action) => {
    switch (action) {
        case Up_Action:
            return state + 1

        case Down_Action:
            return state - 1

        default:
            throw new console.error('Lỗi con mẹ nó rồi');
    }
}
function UseReduct() {
    const [count, dispatch] = useReducer(reducer, initState)


    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(Down_Action)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(Up_Action)}
            >
                Up
            </button>
        </div>
    )
}

export default UseReduct