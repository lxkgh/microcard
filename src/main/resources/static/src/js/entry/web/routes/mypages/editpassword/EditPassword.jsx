import React from 'react'
import InputItem from 'webfront.InputItem'
import styles from './EditPassword.css'
import Button from 'webfront.Button'

class EditPassword extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const oldPwProps = {
            tagName:'旧密码',
            type:'password',
            defaultInfo:'请输入旧密码'
        }
        const newPwProps = {
            tagName:'新密码',
            type:'password',
            defaultInfo:'请输入新密码'
        }
        const comfirmPwProps = {
            tagName:'确认新密码',
            type:'password',
            defaultInfo:'请再次输入新密码'
        }
        const buttonProps = {
            desc:'确认'
        }
        return(
            <div>
                <div className={styles.wrapMenuDivStyle}>
                    <form>
                        <InputItem {...oldPwProps}/>
                        <div className={styles.newPassword}>
                            <InputItem {...newPwProps}/>
                            <InputItem {...comfirmPwProps}/>
                        </div>
                        <div className={styles.btnBox}>
                            <Button {...buttonProps}>{buttonProps.desc}</Button>
                        </div>
                    </form>
                    <a className={styles.forgetName}>忘记密码?</a>
                </div>
            </div>
        )
    }
}
module.exports=EditPassword
