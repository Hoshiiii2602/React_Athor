import { SET_JOB, ADD_JOB, DELETE_JOB } from './constant'

export const initialTodos = {
    job: '',
    jobs: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            console.log(action.payload);
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('looix con mej nos rooif')
    }
};

export default reducer