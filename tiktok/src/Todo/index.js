import { useReducer, useRef } from "react";
import reducer, {initialTodos} from "./reducer";
import {add_job, set_job, delete_job} from "./actions";

function Todos() {
    // dispatch
    const [state, dispatch] = useReducer(reducer, initialTodos)

    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo ..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job} &nbsp;
                         <button onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos