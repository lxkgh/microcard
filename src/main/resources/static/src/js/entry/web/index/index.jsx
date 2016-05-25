import React from 'react'

import styles from './index.css'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.test}>
                <h1>Index</h1>
            </div>
        )
    }
}
export default Index
