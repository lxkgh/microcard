import React from 'react'
import MenuItem from 'menuitem'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import styles from './MyCard.css'
import Button from 'webfront.Button'
import fileSvgIcons from './myIndexSvg.js'
import ROUTES from 'web.Config'
import request from 'superagent'
import {withRouter} from 'react-router'
import Auth from 'Auth'
import {Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
class MyIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            job:''
        }
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const {name,job} = this.state
        const MyPhoneProps = {
            frontName:Auth.username,
            frontSvg:fileSvgIcons.phone,
            frontSize:16,
            afterSvg:svgIcons.rightArrow,
            afterSize:16,
            afterName:'修改',
            rectHeight:'',
            rectWidth:''
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
        const buttonProps = {
            desc:'退出',
            onClick:this.logout
        }
        const portrait = {
            fill:'d3d9dd'
        }
        return (
            <div className={styles.pageCont}>
                <section className={styles.item}>
                    <div className={styles.iconfont}>
                        <Svg paths={[svgIcons.mine]}
                            size={[30,30]}
                            position={[3,3]}
                            style={{portrait}}/>
                    </div>
                    <div className={styles.info}>
                        <h1>{name}</h1>
                        <h3 className={styles.h3}>{job}</h3>
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
        )
    }
    getUserCard=()=>{
        request.get(`${Prefixs.usercard}?userId=${Auth.getUserId()}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            if (data.success) {
                this.setState({
                    name:data.data.name,
                    job:data.data.job
                })
            }else {
                messenger.showMsg({
                    msg:'获取名片信息失败！'
                })
            }
        })
    }
    clickChangePassword(){
        this.props.router.push(ROUTES.editpassword)
    }
    clickChangePhone(){
        this.props.router.push(ROUTES.editphone)
    }
    logout=()=>{
        Auth.logoutServer(()=>{
            this.props.router.push(ROUTES.login)
        },(desc)=>{
            messenger.showMsg({
                msg:desc
            })
        })
    }
}
module.exports=withRouter(MyIndex)
