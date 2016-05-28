import React from 'react'

import LeftNav from '../../component/leftnav/leftnav.jsx'

import styles from './Manages.css'

class Manages extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.manages}>
                <LeftNav/>
                {this.props.children}
            </div>
        )
    }
}
module.exports=Manages
