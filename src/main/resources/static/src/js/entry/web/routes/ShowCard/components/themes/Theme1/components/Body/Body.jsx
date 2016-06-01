import React from 'react'

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
        return (
            <div className={styles.body}>

                <Item style={{height:'60px',padding:'0 15px 0 0'}}>
                    <div style={{lineHeight:'60px',
                        fontSize:'1.5em',color:'rgba(255,255,255,0.9)'}}>
                        <div className={styles.qrcodeWrap}>
                            <SvgIcon {...svgIcons.QRcode}
                                style={{fill:'#fff'}}/>
                        </div>
                        {'13758200860'}
                    </div>
                    <SvgIcon {...svgIcons.telPhone}
                        style={{fill:'#1fe9c1'}}/>
                </Item>

                <Item>
                    {'传真：'}
                    {'0571333333'}
                </Item>
                <Item >
                    {'E-Mail：'}
                    {'1113067241@qq.com'}
                </Item>
                <Item>
                    {'QQ：'}
                    {'1113067241'}
                    <div style={buttonStyle}>{'加QQ'}</div>
                </Item>
                <Item>
                    {'微信：'}
                    {'cyz132499'}
                    <div style={buttonStyle}>{'加微信'}</div>
                </Item>
                <Item>
                    {'新浪微博：'}
                    {'Rr'}
                    <div style={buttonStyle}>{'关注'}</div>
                </Item>
                <Item >
                    {'地址：'}
                    {'杭州'}
                </Item>
                <Item>
                    {'传真：'}
                    {'0571333333'}
                </Item>
                <Item>
                    {'微信公众号：'}
                    {'itBegin'}
                    <div style={buttonStyle}>{'关注'}</div>
                </Item>

                <Item style={{height:'25px',marginTop:'20px'}}>
                    {'产品&服务'}{''}{''}
                </Item>
                <Item>
                    {'公司有很多内容，网站，app等'}{''}{''}
                </Item>

                <Item style={{height:'25px',marginTop:'20px'}}>
                    {'我的签名'}{''}{''}
                </Item>
                <Item>
                    {'我是一个勤劳的运营'}{''}{''}
                </Item>
            </div>
        )
    }
}
module.exports = Body
