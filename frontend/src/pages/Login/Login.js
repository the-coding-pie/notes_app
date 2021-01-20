import { useState } from "react"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { loginUser } from "../../actions/auth"

const Login = ({ auth, loginUser }) => {
  const [details, setDetails] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    loginUser(details)
  }

  if (auth.token && auth.user) {
    return <Redirect to="/" />
  }

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={details.email} onChange={e => handleInput(e)} />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={details.password} onChange={e => handleInput(e)} required />

        <div className="btns">
          <button type="submit" className="btn btn--primary">Login</button>
        </div>

        <div className="extras">
          <small>Don't have an account? <Link to="/register">Register</Link></small>
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
    loginUser: (details) => dispatch(loginUser(details))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)