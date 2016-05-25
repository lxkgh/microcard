import React from 'react'

import styles from './navitem.css'
import cx from 'classnames'

class NavItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const classes=cx('flexbox','items-center',styles.navitem)
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
export default NavItem
