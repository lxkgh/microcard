import React from 'react'

import styles from './Input.css'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <input {...this.props} className={styles.input}/>
        )
    }
}
export default Input
