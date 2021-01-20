import { NOTE_ADDED, DELETE_NOTE, NOTES_LOADED, EMPTY_NOTES } from "../actions/types"

const initialState = {
    notes: []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTE_ADDED:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case NOTES_LOADED:
            return {
                ...state,
                notes: [...action.payload]
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case EMPTY_NOTES:
            return {
                ...state,
                notes: []
            }
        default:
            return state
    }
}

export default notesReducer