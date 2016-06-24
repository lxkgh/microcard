import React,{PropTypes} from 'react'

import styles from './ShowCard.css'
import cx from 'classnames'
import Header from './components/Header/Header.jsx'
import Left from './components/Left/Left.jsx'
import Center from './components/Center/Center.jsx'
import Right from './components/Right/Right.jsx'
import SvgIcon from 'SvgIcon'
import svgIcons from 'web.ShowCardIcons'
import request from 'superagent'
import {Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
import _ from 'lodash'

class ShowCard extends React.Component {
    constructor(props) {
        super(props)
        //showState -1(left),0(center),1(right)
        this.state={
            showState:0,
            userCard:null,
            Theme:null
        }
    }
    componentDidMount() {
        this.getUserCard(this.props.params.userId)
    }
    render() {
        const {showState,userCard,Theme} = this.state
        return (
            <div className={styles.showcard}>
                <Left
                    showState={showState}
                />
                <Center showState={showState}>
                    <div style={{width:'100%',height:'100%',right:'0px'}}>
                        <Header onClick={this.showLeft}>丰享名片</Header>
                        <div className={styles.semicircle} onClick={this.showRight}>
                            <SvgIcon {...svgIcons.arrowLeft} className={styles.arrowLeft}/>
                        </div>
                        {
                            Theme&&userCard?<Theme userCard={userCard}/>:null
                        }
                    </div>
                    <div className={cx({[styles.overlay]:showState!=0})}
                        onClick={this.showCenter}/>
                </Center>
                <Right showState={showState}/>
            </div>
        )
    }
    getTheme=(theme = 1)=>{
        if (theme === 1) {
            require.ensure([], (require) => {
                this.setState({
                    Theme:require('./components/themes/Theme1/Theme1.jsx')
                })
            })
        }
        if (theme === 2) {
            require.ensure([], (require) => {
                this.setState({
                    Theme:require('./components/themes/Theme2/Theme2.jsx')
                })
            })
        }
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
    getUserCard=(userId)=>{
        request.get(`${Prefixs.usercard}?userId=${userId}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            if (data.success) {
                const userCard = data.data
                this.setState({userCard})
                if(!userCard.company||!userCard.name||!userCard.idcard){
                    messenger.showMsg({
                        msg:'您的个人信息与配置还不完整，请在编辑名片页面下进行更新'
                    })
                }
                if(_.size(data.data.themes)!=0){
                    this.getTheme(data.data.themes[0].code)
                }else{
                    this.getTheme()
                }
            }else {
                messenger.showMsg({
                    msg:'获取名片信息失败！'
                })
            }
        })
    }
}
ShowCard.propTypes={
    params:PropTypes.object.isRequired
}
module.exports = ShowCard
