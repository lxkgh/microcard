import React from 'react'

import InputItem from 'webfront.InputItem'
import Topbar from 'topbar'
import styles from './changePhone.css'
import Button from 'webfront.Button'

class ChangePhone extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const phoneProps = {
            tagName:'当前手机号码',
            type:'number',
            defaultInfo:'1234567890'
        }
        const loginPwProps = {
            tagName:'登录密码',
            type:'password',
            defaultInfo:'请输入登录密码'
        }
        const newPhoneProps = {
            tagName:'新手机号码',
            type:'number',
            defaultInfo:'请再次输入新手机号码'
        }
        const idCodeProps = {
            tagName:'验证码',
            type:'text',
            defaultInfo:'请输入验证码',
            button:'| 获取验证码'
        }
        const topbarProps = {
            desc:'修改绑定手机'
        }
        const buttonProps = {
            desc:'确认'
        }
        return(
            <div>
                <Topbar {...topbarProps}/>
                <div className={styles.wrapMenuDivStyle}>
                    <form>
                        <InputItem {...phoneProps}/>
                        <div className={styles.newPassword}>
                            <InputItem {...loginPwProps}/>
                            <InputItem {...newPhoneProps}/>
                            <InputItem {...idCodeProps}/>
                        </div>
                        <div className={styles.btnBox}>
                            <Button {...buttonProps}>{buttonProps.desc}</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
module.exports=ChangePhone
