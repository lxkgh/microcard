import React,{PropTypes} from 'react'

import Item from './Item/Item.jsx'
import SvgIcon from 'SvgIcon'
import svgIcons from 'web.ShowCardIcons'

import styles from './Body.css'

const buttonStyle = {
    width:'70px',
    padding:'7px 0',
    textAlign:'center',
    border:'solid 1px #fff',
    borderRadius:'4px',
    marginLeft:'9px'
}

class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {userCard} = this.props
        return (
            <div className={styles.body}>

                <Item style={{height:'60px',padding:'0 15px 0 0'}}>
                    <div style={{lineHeight:'60px',
                        fontSize:'1.5em',color:'rgba(255,255,255,0.9)'}}>
                        <div className={styles.qrcodeWrap}>
                            <SvgIcon {...svgIcons.QRcode}
                                style={{fill:'#fff'}}/>
                        </div>
                        {userCard.phone}
                    </div>
                    <SvgIcon {...svgIcons.telPhone}
                        style={{fill:'#1fe9c1'}}/>
                </Item>

                <Item >
                    {'E-Mail：'}
                    {userCard.email}
                </Item>
                <Item>
                    {'QQ：'}
                    {userCard.qq}
                    <div style={buttonStyle}>{'加QQ'}</div>
                </Item>
                <Item>
                    {'微信：'}
                    {userCard.weChat}
                    <div style={buttonStyle}>{'加微信'}</div>
                </Item>
                <Item >
                    {'地址：'}
                    {userCard.address}
                </Item>

                <Item style={{height:'25px',marginTop:'20px'}}>
                    {'我的签名'}{''}{''}
                </Item>
                <Item>
                    {userCard.signature}{''}{''}
                </Item>
            </div>
        )
    }
}
Body.defaultProps={
    userCard:{}
}
Body.propTypes={
    userCard:PropTypes.object
}
module.exports = Body
