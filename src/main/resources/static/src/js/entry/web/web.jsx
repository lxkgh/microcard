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
            require('./routes/changepassword/index.jsx'),
            require('./routes/changephone/index.jsx'),
            require('./routes/editcard/index.jsx'),
            require('./routes/homepage/index.jsx'),
            require('./routes/login/index.jsx'),
            require('./routes/mycard/index.jsx'),
            require('./routes/myinfo/index.jsx'),
            require('./routes/mysign/index.jsx'),
            require('./routes/mysociety/index.jsx'),
            require('./routes/register/index.jsx'),
            require('./routes/mysettitle/index.jsx')
        ]
    }]
}

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('common-body')
)
