import Context from "./Context";
import { useReducer } from 'react';
import Reducer, { initState } from "./Reducer";

function Provider({ Children }) {
    const [state, dispatch] = useReducer(Reducer, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {Children}
        </Context.Provider>
    )
}

export default Provider;