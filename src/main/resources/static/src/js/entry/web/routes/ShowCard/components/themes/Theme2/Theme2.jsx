import React from 'react'

import styles from './Theme2.css'
import backgroundImg from './theme2.jpg'

import Header from './components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

class Theme2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.theme}
                style={{backgroundImage:`url(${backgroundImg})`}}>
                <div className={styles.body}>
                    <Header/>
                    <div className={styles.infos}>
                        123
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
module.exports = Theme2
