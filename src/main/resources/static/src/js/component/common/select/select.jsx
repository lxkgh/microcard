import React from 'react'

import styles from './select.css'

class Select extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <select  {...this.props} className={styles.input}>
                {this.props.children}
            </select>
        )
    }
}
export default Select
