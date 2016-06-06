import React from 'react'

import styles from './Theme1.css'
import backgroundImg from './backround.jpg'
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Footer from '../components/Footer/Footer.jsx'

class Theme1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.theme}
                style={{backgroundImage:`url(${backgroundImg})`}}>

                <Header img={backgroundImg}>
                    {'Molly'}
                    {'运营部门  运营经理'}
                    {176}
                </Header>

                <Body/>

                <Footer/>

            </div>
        )
    }
}
module.exports = Theme1
