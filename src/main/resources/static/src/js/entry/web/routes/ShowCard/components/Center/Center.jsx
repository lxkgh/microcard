import React,{PropTypes} from 'react'

import styles from './Center.css'
import cx from 'classnames'

class Center extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {showState} = this.props
        const classes = cx(styles.center,
            {[styles.hideLeft]:showState==1,[styles.hideRight]:showState==-1})
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
Center.propTypes={
    showState:PropTypes.number.isRequired
}
module.exports = Center
