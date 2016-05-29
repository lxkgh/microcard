import React, {PropTypes} from 'react'

import styles from './Msg.css'

class Msg extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {msg} = this.props
        return (
            <div className={styles.popup}>
                {msg}
            </div>
        )
    }
}
Msg.propTypes={
    msg:PropTypes.string.isRequired
}
module.exports = Msg
