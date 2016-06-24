import React from 'react'
import InputItem from 'webfront.InputItem'
import styles from './EditPassword.css'
import Button from 'webfront.Button'
import messenger from 'web.Messenger'
import request from 'superagent'
import {Prefixs} from 'web.Config'
import {webErrHandle} from 'ErrHandles'
import ROUTES from 'web.Config'
import {withRouter} from 'react-router'
import Auth from 'Auth'
class EditPassword extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:'',
            newPassword:'',
            comfirmPassword:''
        }
    }
    render(){
        const {password, newPassword, comfirmPassword} = this.state
        const oldPwProps = {
            tagName:'旧密码',
            type:'password',
            defaultInfo:'请输入旧密码',
            value:password,
            onChange:this.changePassword
        }
        const newPwProps = {
            tagName:'新密码',
            type:'password',
            defaultInfo:'请输入新密码',
            value:newPassword,
            onChange:this.changeNewPassword
        }
        const comfirmPwProps = {
            tagName:'确认新密码',
            type:'password',
            defaultInfo:'请再次输入新密码',
            value:comfirmPassword,
            onChange:this.changeComfirmPassword
        }
        const buttonProps = {
            desc:'确认',
            onClick:this.handleSubmit
        }
        return(
            <div>
                <div className={styles.pageCont}>
                    <form style={{marginTop:'20px'}}>
                        <InputItem {...oldPwProps}/>
                        <div className={styles.newPassword}>
                            <InputItem {...newPwProps}/>
                            <InputItem {...comfirmPwProps}/>
                        </div>
                        <div className={styles.btnBox}>
                            <Button {...buttonProps}>{buttonProps.desc}</Button>
                        </div>
                    </form>
                    <a className={styles.forgetName} onClick={()=>{this.clickForgetPwd()}}>忘记密码?</a>
                </div>
            </div>
        )
    }
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    changeNewPassword=(e)=>{
        this.setState({
            newPassword:e.target.value
        })
    }
    changeComfirmPassword=(e)=>{
        this.setState({
            comfirmPassword:e.target.value
        })
    }
    clickForgetPwd=()=>{
        this.props.router.push(ROUTES.forgetpwd)
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const {password,newPassword,comfirmPassword} = this.state
        if (!password) {
            messenger.showMsg({
                msg:'旧密码不能为空！'
            })
            return
        }
        if (!newPassword) {
            messenger.showMsg({
                msg:'新密码不能为空！'
            })
            return
        }
        if (!comfirmPassword) {
            messenger.showMsg({
                msg:'确认新密码不能为空！'
            })
            return
        }
        if (newPassword!=comfirmPassword) {
            messenger.showMsg({
                msg:'新密码和确认密码不同！'
            })
            return
        }
        request.put(`${Prefixs.user}/password`)
        .send(this.state)
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            if (data.success) {
                const user={
                    username:Auth.username,
                    password:newPassword
                }
                Auth.logoutServer(()=>{
                    Auth.loginServer(
                        user,
                        ()=>{
                            Auth.loginClient(()=>{
                                this.props.router.push(ROUTES.mycard)
                            })
                        },
                        ()=>{
                            messenger.showMsg({
                                msg:'登录失败！'
                            })
                            this.props.router.push(ROUTES.login)
                        },
                        webErrHandle
                    )
                })
            }
        },webErrHandle)
    }
}
module.exports=withRouter(EditPassword)
