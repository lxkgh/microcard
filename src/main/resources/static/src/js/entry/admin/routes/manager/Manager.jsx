import React from 'react'

import LeftNav from '../../component/leftnav/leftnav.jsx'

import styles from './Manager.css'

import Header from 'admin.Header'

class Manages extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.manages}>
                <Header/>
                <div className={styles.body}>
                    <LeftNav/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
module.exports=Manages
