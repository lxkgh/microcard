import React from 'react'

import styles from './ShowCard.css'
import cx from 'classnames'
import Header from './components/Header/Header.jsx'
import Left from './components/Left/Left.jsx'
import Center from './components/Center/Center.jsx'
import Right from './components/Right/Right.jsx'
import SvgIcon from 'SvgIcon'
import svgIcons from 'web.ShowCardIcons'
// import Theme1 from './components/themes/Theme1/Theme1.jsx'
import Theme2 from './components/themes/Theme2/Theme2.jsx'

class ShowCard extends React.Component {
    constructor(props) {
        super(props)
        //showState -1(left),0(center),1(right)
        this.state={
            showState:0
        }
    }
    render() {
        const {showState} = this.state
        return (
            <div className={styles.showcard}>
                <Left showState={showState}/>
                <Center showState={showState}>
                    <div style={{width:'100%',height:'100%',right:'0px'}}>
                        <Header onClick={this.showLeft}>Itbegin</Header>
                        <div className={styles.semicircle} onClick={this.showRight}>
                            <SvgIcon {...svgIcons.arrowLeft} className={styles.arrowLeft}/>
                        </div>
                        <Theme2/>
                    </div>
                    <div className={cx({[styles.overlay]:showState!=0})}
                        onClick={this.showCenter}/>
                </Center>
                <Right showState={showState}/>
            </div>
        )
    }
    showLeft=()=>{
        this.setState({
            showState: -1
        })
    }
    showCenter=()=>{
        this.setState({
            showState: 0
        })
    }
    showRight=()=>{
        this.setState({
            showState: 1
        })
    }
}
module.exports = ShowCard
