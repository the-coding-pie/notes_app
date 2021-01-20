import Note from "../../components/Note/Note"
import AddNote from "../../containers/AddNote/AddNote"
import { connect } from 'react-redux'
import { useEffect } from "react"
import { getNotes } from "../../actions/notes"

const Home = ({ notes, getNotes }) => {

  useEffect(() => getNotes(), [])

  return (
    <div className="home container">
      <AddNote />

      <div className="notes">
        {notes.map(note => <Note key={note.id} note={note} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: () => dispatch(getNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)