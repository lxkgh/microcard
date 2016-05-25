import React from 'react'
import ReactDOM from 'react-dom'
import 'css.Common'
import { hashHistory, Router} from 'react-router'

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
        childRoutes: []
    }]
}

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('common-body')
)
