import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/auth'
import './Navbar.css'

const Navbar = ({ auth, logoutUser }) => {

    const handleClick = () => {
        logoutUser()
    }

    return <nav className="nav">
        <div className="container">
            <h1 className="nav__title">NotesApp</h1>
            <div className="nav__right">
                {auth.token && auth.user ? (
                    <>
                        Welcome <strong>{auth.user.username}</strong>

                        <button className="logout-btn" onClick={handleClick}>Logout</button></>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </div>
    </nav>
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)