import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import {withRouter} from 'react-router'
import cx from 'classnames'
import ROUTES from 'web.Config'

class FooterBar extends React.Component{
    constructor(props){
        super(props);
        this.handleMsg = this.handleMsg.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.handleMine = this.handleMine.bind(this);
    }
    handleMsg(){}
    handleHome(){
        this.props.router.push(ROUTES.home)
    }
    handleMine(){
        this.props.router.push(ROUTES.mycard)
    }
    render(){
        const {activeUrl} = this.props
        const ulStyle = {
            width: '100%',
            height:'100%'
        }
        let fillMsg = '#7d7d7d'
        let fillHome = '#7d7d7d'
        let fillMine = '#7d7d7d'
        let transformMsg = 'scale(1,1)'
        let transformHome = 'scale(1,1)'
        let transformMine = 'scale(1,1)'
        if(activeUrl==ROUTES.msg){
            fillMsg = '#1f8ff3'
            transformMsg = 'scale(1.2,1.2)'
        }
        if(activeUrl==ROUTES.home){
            fillHome = '#1f8ff3'
            transformHome = 'scale(1.2,1.2)'
        }
        if(activeUrl==ROUTES.mycard){
            fillMine = '#1f8ff3'
            transformMine = 'scale(1.2,1.2)'
        }
        const wrapdivStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 2,
            width: '100%',
            height: '55px',
            backgroundColor: '#fff',
            borderTop: '1px solid #dbdbdb'
        }
        const liStyle = {
            textAlign: 'center',
            position: 'relative',
            paddingTop: '3px',
            width: '10%'

        }
        const divStyle = {
            width: '50px',
            height: '24px',
            margin: '0 auto 2px',
            position: 'relative'
        }
        const midDivStyle = {
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
        }
        const pMsgStyle = {
            fontSize: '1.2rem',
            color: fillMsg,
            marginTop: '5px'
        }
        const pMineStyle = {
            fontSize: '1.2rem',
            color: fillMine,
            marginTop: '5px'
        }
        const pMidStyle = {
            fontSize: '1.2rem',
            color: fillHome,
            marginTop :'-30px'
        }
        const spanStyle = {
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
        const message= {
            fill : fillMsg,
            WebkitTransform:transformMsg,
            MozTransform:transformMsg,
            transform:transformMsg
        }
        const home= {
            fill : fillHome,
            WebkitTransform:transformHome,
            MozTransform:transformHome,
            transform:transformHome
        }
        const mine= {
            fill : fillMine,
            WebkitTransform:transformMine,
            MozTransform:transformMine,
            transform:transformMine
        }
        return(
            <div style ={wrapdivStyle}>
                <ul style ={ulStyle} className={cx('flexbox','space-around')}>
                    <li style ={liStyle} onClick={this.handleMsg}>
                        <div style ={divStyle} >
                            <Svg paths={[svgIcons.message]} size={[32,32]}
                                style = {message}/>
                            <p style={pMsgStyle}>消息</p>
                        </div>
                    </li>
                    <li style ={liStyle}>
                        <span style={spanStyle}></span>
                        <div style ={midDivStyle} onClick={this.handleHome}>
                            <Svg paths={[svgIcons.home]} size={[32,32]}
                                style = {home}/>
                            <p style={pMidStyle}>我的丰享</p>
                        </div>
                    </li>
                    <li style ={liStyle} onClick={this.handleMine}>
                        <div style ={divStyle}>
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
