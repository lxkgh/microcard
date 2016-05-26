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
        component: App,
        indexRoute: { onEnter: (nextState, replace) => replace('/login') },
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
