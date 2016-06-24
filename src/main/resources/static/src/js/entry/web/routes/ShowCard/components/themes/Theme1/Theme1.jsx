import React,{PropTypes} from 'react'

import styles from './Theme1.css'
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Footer from '../components/Footer/Footer.jsx'
import defaultPortait from '../defaultPortait.png'
import Phone from '../components/Phone/Phone.jsx'
import messenger from 'web.Messenger'
import defaultBkgImg from './defaultBkgImg.jpg'

class Theme1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {userCard} = this.props
        const portait = userCard.userIcon?
                        userCard.userIcon.path:defaultPortait
        const bkgImgUrl = userCard.bkgImg?userCard.bkgImg.path:defaultBkgImg
        const department = userCard.department?userCard.department:''
        const job = userCard.job?userCard.job:''
        return (
            <div className={styles.theme}
                style={{backgroundImage:`url(${bkgImgUrl})`}}>
                <Header img={portait}>
                    {userCard.name}
                    {`${department}   ${job}`}
                    {userCard.visit?userCard.visit:0}
                </Header>

                <Body userCard={userCard}/>

                <Footer clickTelPhone={()=>{this.clickTelPhone()}}/>

            </div>
        )
    }
    clickTelPhone=()=>{
        messenger.show(Phone,{phoneNum:this.props.userCard.phone})
    }
}
Theme1.defaultProps={
    userCard:{}
}
Theme1.propTypes={
    userCard:PropTypes.object
}
module.exports = Theme1
