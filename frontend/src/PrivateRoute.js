import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ auth, dispatch, component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={(props) => {
            if (auth.token && auth.user) {
                return <Component {...props} />
            } else {
                return <Redirect to='/login' />
            }
        }
        }
    />
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)