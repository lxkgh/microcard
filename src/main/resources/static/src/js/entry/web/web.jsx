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
    componentWillMount(){
        Auth.login(()=>{this.props.router.push(ROUTES.home)})
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
            require('./routes/login/index.jsx'),
            require('./routes/mypages/index.jsx'),
            require('./routes/register/index.jsx')
        ]
    }]
}

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('common-body')
)
