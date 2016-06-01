import React,{PropTypes} from 'react'

import styles from './Left.css'
import cx from 'classnames'
import Auth from 'Auth'

import Logged from './components/Logged/Logged.jsx'
import UnLogin from './components/UnLogin/UnLogin.jsx'

class Left extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {showState} = this.props
        return (
            <div className={cx(styles.left,{[styles.hide]:showState!=-1})}>
                {Auth.isLogged()?<Logged/>:<UnLogin/>}
            </div>
        )
    }
}
Left.propTypes={
    showState:PropTypes.number.isRequired
}
module.exports=Left
