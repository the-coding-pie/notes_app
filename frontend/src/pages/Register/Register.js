import { useState } from "react"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { addAlert } from "../../actions/alerts"
import { registerUser } from "../../actions/auth"

const Register = ({ auth, registerUser, addAlert }) => {
  const [details, setDetails] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  })

  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (details.password === details.password2) {
      registerUser(details)
    } else {
      addAlert({
        type: 'error',
        alert: "Password Needs to be same..."
      })

      setDetails({
        ...details,
        password: '',
        password2: '',
      })
    }
  }

  if (auth.token && auth.user) {
    return <Redirect to="/" />
  }

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h3>Register</h3>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={details.email} onChange={e => handleInput(e)} />

        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required value={details.username} onChange={e => handleInput(e)} />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={details.password} onChange={e => handleInput(e)} required />

        <label htmlFor="password2">Confirm Password</label>
        <input id="password2" name="password2" type="password" value={details.password2} onChange={e => handleInput(e)} required />

        <div className="btns">
          <button type="submit" className="btn btn--primary">Register</button>
        </div>

        <div className="extras">
          <small>Already have an account? <Link to="/login">Login</Link></small>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (details) => dispatch(registerUser(details)),
    addAlert: (alert) => dispatch(addAlert(alert))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)