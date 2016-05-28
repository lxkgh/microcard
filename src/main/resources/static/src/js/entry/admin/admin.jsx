import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Router} from 'react-router'
import 'css.Common'
import ROUTES from 'admin.Config'

const styles={
    adminAPP:{
        height:'100%',
        width:'100%'
    }
}

class AdminAPP extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.adminAPP}>
                {this.props.children}
            </div>
        )
    }
}
const rootRoute={
    component:'div',
    childRoutes: [{
        path: '/',
        component: AdminAPP,
        indexRoute: { onEnter: (nextState, replace) => replace(ROUTES.users) },
        childRoutes: [
            require('./routes/manager/index.jsx')
        ]
    }]
}

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('common-body')
)
