import React from 'react'
import ReactDOM from 'react-dom'
import 'css.Common'
import './web.css'
import { hashHistory, Router,withRouter} from 'react-router'
import Auth from 'Auth'
import ROUTES from './config.js'
Auth.allowedAuthorities = ['ROLE_USER','ROLE_ADMIN']
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render=()=>{
        return (
            <div style={{width:'100%',height:'100%'}}>
                {this.props.children}
            </div>
        )
    }
}

const rootRoute={
    component:'div',
    childRoutes: [{
        path: '/',
        component: withRouter(App),
        indexRoute: { onEnter: (nextState, replace) => {
            replace(ROUTES.home)
        }},
        childRoutes: [
            require('./routes/Login/index.jsx'),
            require('./routes/mypages/index.jsx'),
            require('./routes/Register/index.jsx')
        ]
    }]
}
Auth.loginClient(null,null,()=>{
    ReactDOM.render(
      <Router history={hashHistory} routes={rootRoute} />,
      document.getElementById('common-body')
    )
})
