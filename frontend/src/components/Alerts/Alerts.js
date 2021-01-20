import { withAlert } from "react-alert"
import { connect } from "react-redux"

const Alerts = ({ alert, alerts }) => {
    
    alerts && (
        alerts.alerts.forEach(a => {
            if (a.type === 'error') alert.error(a.alert)
            if (a.type === 'success') alert.success(a.alert)
        })
    )

    return (
        <></>
    )
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alerts
    }
}

export default connect(mapStateToProps)(withAlert()(Alerts))