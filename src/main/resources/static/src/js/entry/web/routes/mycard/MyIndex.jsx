import React from 'react'

import Topbar from 'topbar'
import FooterBar from 'footerbar'
import MenuItem from 'menuitem'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import styles from './MyIndex.css'
import Button from 'webfront.Button'
import 'css.Common'
import fileSvgIcons from './myIndexSvg.js'
class MyIndex extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const MyPhoneProps = {
            frontName:'13819191919',
            frontSvg:fileSvgIcons.phone,
            frontSize:16,
            afterSvg:svgIcons.rightArrow,
            afterSize:16,
            afterName:'修改'
        }
        const topbarProps = {
            desc:'我的'
        }
        const changePasswordProps = {
            frontName:'登录密码修改',
            afterSvg:svgIcons.rightArrow,
            afterSize:16
        }
        const aboutUsProps = {
            frontName:'关于丰享',
            afterSvg:svgIcons.rightArrow,
            afterSize:16
        }
        const wrapMenuDivStyle = {
            top:'44px',
            position:'relative',
            maxWidth: '600px',
            margin:'auto'
        }
        const buttonProps = {
            desc:'退出'
        }
        const portrait = {
            fill:'d3d9dd'
        }
        return (
            <div>
                <Topbar {...topbarProps} />
                <div style={wrapMenuDivStyle}>
                    <section className={styles.item}>
                        <div className={styles.iconfont}>
                            <Svg paths={[svgIcons.mine]}
                                size={[30,30]}
                                position={[3,3]}
                                style={{portrait}}/>
                        </div>
                        <div className={styles.info}>
                            <h1>Molly</h1>
                            <h3 className={styles.h3}>运营经理</h3>
                        </div>
                        <div className={styles.QRcodeBox}>
                            <Svg paths={[fileSvgIcons.QRcode]}
                                size={[32,32]}
                                className={styles.QRcode}/>
                        </div>
                    </section>
                    <h2 className ={styles.h2Style}>已绑定手机号</h2>
                    <ul>
                        <MenuItem {...MyPhoneProps}/>
                    </ul>
                    <h2 className= {styles.h2Style}>安全设置</h2>
                    <ul>
                        <MenuItem {...changePasswordProps}/>
                    </ul>
                    <ul className= {styles.normalUl}>
                        <MenuItem {...aboutUsProps}/>
                    </ul>
                    <div className= {styles.buttonDiv}>
                        <Button {...buttonProps}>{buttonProps.desc}</Button>
                    </div>
                </div>
                <FooterBar />
            </div>
        )
    }
}
module.exports=MyIndex
