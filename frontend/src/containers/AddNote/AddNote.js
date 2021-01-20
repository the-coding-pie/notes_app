import { useState } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../actions/notes'
import './AddNote.css'

const AddNote = ({ addNote }) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        addNote({ title, desc })

        setTitle('')
        setDesc('')
    }

    return <div className="add-note">
            <h2>Add Note</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required />

                <label htmlFor="desc">Description</label>
                <textarea id="desc" value={desc} onChange={e => setDesc(e.target.value)} required></textarea>

                <button className="btn btn--primary">
                    Add
                </button>
            </form>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
}

export default connect(null, mapDispatchToProps)(AddNote)