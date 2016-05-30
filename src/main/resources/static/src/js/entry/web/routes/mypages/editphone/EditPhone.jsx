import React from 'react'

import InputItem from 'webfront.InputItem'
import styles from './EditPhone.css'
import Button from 'webfront.Button'
import Auth from 'Auth'
import messenger from 'web.Messenger'
import request from 'superagent'
import ROUTES,{Prefixs} from 'web.Config'
import {webErrHandle} from 'ErrHandles'
import {withRouter} from 'react-router'
class EditPhone extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:'',
            username:''
        }
    }
    render(){
        const {password,username} = this.state
        const phoneProps = {
            tagName:'当前手机号码',
            defaultInfo:Auth.username
        }
        const loginPwProps = {
            tagName:'登录密码',
            type:'password',
            value:password,
            onChange:this.changePassword,
            defaultInfo:'请输入登录密码'
        }
        const newPhoneProps = {
            tagName:'新手机号码',
            value:username,
            onChange:this.ChangePhone,
            defaultInfo:'请再次输入新手机号码'
        }
        const idCodeProps = {
            tagName:'验证码',
            defaultInfo:'请输入验证码',
            button:'| 获取验证码'
        }
        const buttonProps = {
            desc:'确认',
            onClick:this.handleSubmit
        }
        return(
            <div>
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
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    ChangePhone=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const {username,password} = this.state
        if (!password) {
            messenger.showMsg({
                msg:'密码不能为空！'
            })
        }
        if (username==Auth.username) {
            messenger.showMsg({
                msg:'新手机号不能与旧手机号相同！'
            })
        }
        request.put(`${Prefixs.user}/username`)
        .send(this.state)
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            if (data.success) {
                Auth.logoutServer(()=>{
                    Auth.loginServer(
                        this.state,
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
module.exports=withRouter(EditPhone)
