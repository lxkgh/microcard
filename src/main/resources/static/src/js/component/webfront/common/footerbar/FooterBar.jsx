import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import {withRouter} from 'react-router'
import cx from 'classnames'
import ROUTES from 'web.Config'
const staticStyle = {
    wrapdivStyle:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        height: '55px',
        backgroundColor: '#fff',
        borderTop: '1px solid #dbdbdb'
    },
    ulStyle:{
        width:'100%',
        height:'100%'
    },
    liStyle:{
        textAlign: 'center',
        position: 'relative',
        paddingTop: '3px',
        width: '10%'
    },
    divStyle:{
        width: '50px',
        height: '24px',
        margin: '0 auto 2px',
        position: 'relative'
    },
    midDivStyle:{
        position: 'absolute',
        width: '50px',
        height: '50px',
        zIndex: 3,
        lineHeight: '50px',
        textAlign: 'center',
        left: '50%',
        top: '-22px',
        marginLeft: '-25px',
        backgroundColor: '#fff',
        borderRadius: '50%'
    },
    spanStyle:{
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        zIndex: 2,
        left: '50%',
        top: '-23px',
        marginLeft: '-25px',
        border: '1px solid #dbdbdb'
    }
}
class FooterBar extends React.Component{
    constructor(props){
        super(props);
        this.handleMsg = this.handleMsg.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.handleMine = this.handleMine.bind(this);
        this.handleAB = this.handleAB.bind(this);
    }
    handleMsg(){}
    handleAB(){
        this.props.router.push(ROUTES.addressbook)
    }
    handleHome(){
        this.props.router.push(ROUTES.home)
    }
    handleMine(){
        this.props.router.push(ROUTES.mycard)
    }
    render(){
        const {activeUrl} = this.props
        const fillAndScale = {
            fillMsg : '#7d7d7d',
            fillHome : '#7d7d7d',
            fillMine : '#7d7d7d',
            fillAddressBook : '#7d7d7d',
            fillCommunity : '#7d7d7d',
            transformAB : 'scale(1,1)',
            transformCM : 'scale(1,1)',
            transformMsg : 'scale(1,1)',
            transformHome : 'scale(1,1)',
            transformMine : 'scale(1,1)'
        }
        if(activeUrl==ROUTES.msg){
            fillAndScale.fillMsg = '#1f8ff3'
            fillAndScale.transformMsg = 'scale(1.2,1.2)'
        }
        if(activeUrl==ROUTES.home){
            fillAndScale.fillHome = '#1f8ff3'
            fillAndScale.transformHome = 'scale(1.2,1.2)'
        }
        if(activeUrl==ROUTES.mycard){
            fillAndScale.fillMine = '#1f8ff3'
            fillAndScale.transformMine = 'scale(1.2,1.2)'
        }
        if(activeUrl==ROUTES.addressbook){
            fillAndScale.fillAddressBook = '#1f8ff3'
            fillAndScale.transformAB = 'scale(1.2,1.2)'
        }
        if(activeUrl==ROUTES.community){
            fillAndScale.fillCommunity = '#1f8ff3'
            fillAndScale.transformCM = 'scale(1.2,1.2)'
        }
        const pMsgStyle = {
            fontSize: '1.2rem',
            color: fillAndScale.fillMsg,
            marginTop: '5px'
        }
        const pMineStyle = {
            fontSize: '1.2rem',
            color: fillAndScale.fillMine,
            marginTop: '5px'
        }
        const pABStyle = {
            fontSize: '1.2rem',
            color: fillAndScale.fillAddressBook,
            marginTop: '5px'
        }
        const pCMStyle = {
            fontSize: '1.2rem',
            color: fillAndScale.fillCommunity,
            marginTop: '5px'
        }
        const pMidStyle = {
            fontSize: '1.2rem',
            color: fillAndScale.fillHome,
            marginTop :'-30px'
        }
        const message= {
            fill : fillAndScale.fillMsg,
            WebkitTransform:fillAndScale.transformMsg,
            MozTransform:fillAndScale.transformMsg,
            transform:fillAndScale.transformMsg
        }
        const addressBook= {
            fill : fillAndScale.fillAddressBook,
            WebkitTransform:fillAndScale.transformAB,
            MozTransform:fillAndScale.transformAB,
            transform:fillAndScale.transformAB
        }
        const community= {
            fill : fillAndScale.fillCommunity,
            WebkitTransform:fillAndScale.transformCM,
            MozTransform:fillAndScale.transformCM,
            transform:fillAndScale.transformCM
        }
        const home= {
            fill : fillAndScale.fillHome,
            WebkitTransform:fillAndScale.transformHome,
            MozTransform:fillAndScale.transformHome,
            transform:fillAndScale.transformHome
        }
        const mine= {
            fill : fillAndScale.fillMine,
            WebkitTransform:fillAndScale.transformMine,
            MozTransform:fillAndScale.transformMine,
            transform:fillAndScale.transformMine
        }
        return(
            <div style ={staticStyle.wrapdivStyle}>
                <ul style ={staticStyle.ulStyle} className={cx('flexbox','space-around')}>
                    <li style ={staticStyle.liStyle} onClick={this.handleAB}>
                        <div style ={staticStyle.divStyle} >
                            <Svg paths={[svgIcons.addressBook]} size={[32,32]}
                                style = {addressBook}/>
                            <p style={pABStyle}>通讯录</p>
                        </div>
                    </li>
                    <li style ={staticStyle.liStyle} onClick={this.handleMsg}>
                        <div style ={staticStyle.divStyle} >
                            <Svg paths={[svgIcons.message]} size={[32,32]}
                                style = {message}/>
                            <p style={pMsgStyle}>消息</p>
                        </div>
                    </li>
                    <li style ={staticStyle.liStyle}>
                        <span style={staticStyle.spanStyle}></span>
                        <div style ={staticStyle.midDivStyle} onClick={this.handleHome}>
                            <Svg paths={[svgIcons.home]} size={[32,32]}
                                style = {home}/>
                            <p style={pMidStyle}>我的丰享</p>
                        </div>
                    </li>
                    <li style ={staticStyle.liStyle} onClick={this.handleMine}>
                        <div style ={staticStyle.divStyle}>
                            <Svg paths={[svgIcons.community]} size={[32,32]}
                                style ={community}/>
                            <p style={pCMStyle}>圈子</p>
                        </div>
                    </li>
                    <li style ={staticStyle.liStyle} onClick={this.handleMine}>
                        <div style ={staticStyle.divStyle}>
                            <Svg paths={[svgIcons.mine]} size={[32,32]}
                                style ={mine}/>
                            <p style={pMineStyle}>我的</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
FooterBar.propTypes={
    activeUrl:PropTypes.string
}
module.exports=withRouter(FooterBar)
