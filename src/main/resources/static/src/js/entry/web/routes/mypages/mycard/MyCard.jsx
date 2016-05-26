import React,{PropTypes} from 'react'

import FooterBar from 'footerbar'
import MenuItem from 'menuitem'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import styles from './MyCard.css'
import Button from 'webfront.Button'
import 'css.Common'
import fileSvgIcons from './myIndexSvg.js'
class MyIndex extends React.Component{
    constructor(props){
        super(props);
    }
    clickChangePassword(){
        this.context.router.push('/mypages/editpassword')
    }
    clickChangePhone(){
        this.context.router.push('/mypages/editphone')
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
                        <MenuItem {...MyPhoneProps}
                            onClick={()=>{this.clickChangePhone()}}/>
                    </ul>
                    <h2 className= {styles.h2Style}>安全设置</h2>
                    <ul>
                        <MenuItem {...changePasswordProps}
                            onClick={()=>{this.clickChangePassword()}}/>
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
MyIndex.contextTypes = {
    router:PropTypes.object
}
module.exports=MyIndex