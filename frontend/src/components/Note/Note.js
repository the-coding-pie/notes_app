import { connect } from 'react-redux'
import { deleteNote } from '../../actions/notes'
import './Note.css'

const Note = ({ note, deleteNote }) => {
    let created_at = new Date(note.created_at).toDateString().split(' ')

    created_at = `${created_at[2]} ${created_at[1]} ${created_at[3]}`
    
    return <div className="note">
        <time>{created_at}</time>
        <h3>{note.title}</h3>
        <p>{note.desc.substring(0, 25) + "..."}</p>
        <div className="delete">
            <button className="delete-btn" onClick={e => {
                deleteNote(note.id)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => dispatch(deleteNote(id))
    }
}

export default connect(null, mapDispatchToProps)(Note)