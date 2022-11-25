import { useReducer, useRef } from "react";

// tạo init
const initialTodos = {
    job: '',
    jobs: []
}
//tạo action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload

    }
}


const addJob = payload => {
    return {
        type: ADD_JOB,
        payload

    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload

    }
}

// tạo reducer

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            console.log(action.payload);
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('looix con mej nos rooif')
    }

    return newState
};

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