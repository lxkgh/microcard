import React from 'react'
import ReactDOM from 'react-dom'
import 'css.Common'
import { hashHistory, Router} from 'react-router'
import './web.css'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div />
        )
    }
}

const rootRoute={
    component:'div',
    childRoutes: [{
        path: '/',
        component: App,
        childRoutes: [
            require('./routes/login/index.jsx')
        ]
    }]
}

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('common-body')
)
