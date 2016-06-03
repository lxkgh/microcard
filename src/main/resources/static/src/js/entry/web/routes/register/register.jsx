import React from 'react'

import {withRouter} from 'react-router'
import styles from './Register.css'
import Carousel from 'Carousel'
import img1 from './微名片.png'
import img2 from './图二.png'
import img3 from './图三.png'

class Register extends React.Component {
    constructor(props){
        super(props);
    }
    clickLogin(){
        this.props.router.push('/login')
    }
    render(){
        const logoPic = {
            imgs:[img1,img2,img3],
            height:'100%',
            width:'100%'
        }
        return (
            <div className = {styles.pageCont}>
                <div className = {styles.Wrap}>
                <Carousel {...logoPic}>
                    <button className={styles.loginBtn}
                            onClick={()=>{this.clickLogin()}}>登录</button>
                </Carousel>
                </div>
                <div className={styles.wrapbox}>
                    <form>
                        <label className={styles.firlb}>
                            <span className={styles.areaCode}>+86</span>
                            <input type="text"
                                    id = "mobile"
                                    className = {styles.mobile}
                                    placeholder="请输入手机号"/>
                        </label>
                        <label className={styles.seclb}>
                            <input type="text"
                                    id = "code"
                                    className = {styles.checkCode}
                                    placeholder = "请输入验证码"/>
                            <input type="button"
                                    className={styles.getCheckCode}
                                    value = "| 获取验证码"/>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}
module.exports=withRouter(Register)
