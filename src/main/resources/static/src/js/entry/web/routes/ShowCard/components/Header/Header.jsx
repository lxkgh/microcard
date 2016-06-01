import React from 'react'

import styles from './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {onClick} = this.props
        return (
            <header className={styles.header}>
                <div className={styles.icon} onClick={onClick}>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className={styles.title}>{this.props.children}</div>
            </header>
        )
    }
}
module.exports=Header
