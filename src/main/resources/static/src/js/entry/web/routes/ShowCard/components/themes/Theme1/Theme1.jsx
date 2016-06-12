import React,{PropTypes} from 'react'

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
        const {userCard} = this.props
        return (
            <div className={styles.theme}
                style={{backgroundImage:`url(${backgroundImg})`}}>

                <Header img={backgroundImg}>
                    {userCard.name}
                    {`${userCard.department}   ${userCard.job}`}
                    {userCard.visit?userCard.visit:0}
                </Header>

                <Body userCard={userCard}/>

                <Footer/>

            </div>
        )
    }
}
Theme1.defaultProps={
    userCard:{}
}
Theme1.propTypes={
    userCard:PropTypes.object
}
module.exports = Theme1
