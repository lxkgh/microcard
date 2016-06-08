import React from 'react'
import styles from './forgetPwd.css'
import cx from 'classnames'
import {withRouter} from 'react-router'
import key from './key.png'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'
import ROUTES from 'web.Config'
import messenger from 'web.Messenger'
import request from 'superagent'
import {Prefixs} from 'web.Config'
import {webErrHandle} from 'ErrHandles'
class ForgetPwd extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            check : true,
            cellphone : '',
            confirmcode : ''
        }
    }
    render() {
        const {cellphone,confirmcode} = this.state
        const idCodeProps = {
            tagName:'验证码',
            defaultInfo:'请输入验证码',
            button:'| 获取验证码',
            value:confirmcode
        }
        const cellphoneProps = {
            tagName:'手机号',
            defaultInfo:'请输入手机号',
            value:cellphone
        }
        return (
            <div className={styles.pageCont}>
                <div className={styles.topbox}>
                    <button className={styles.loginBtn}
                        onClick={(e)=>{this.clickLogin(e)}}>登录</button>
                    <div className={styles.imgbox}>
                        <img src={key} alt="忘记密码" className={styles.keyPic}/>
                    </div>
                </div>
                <div className={cx(styles.box,'wrap')}>
                    <h2 style={{marginBottom :'20px'}}>找回密码</h2>
                    <form className={styles.formStyle}>
                        <InputItem {...cellphoneProps}
                            onChange={this.changeCellphone}/>
                        <InputItem {...idCodeProps}
                            onChange={(e)=>{this.changeConfirmCode(e)}}/>
                    </form>
                    <Button className={styles.nextBtn}>
                        <h2 onClick={(e)=>{this.submit(e)}}>下一步</h2>
                    </Button>
                </div>
            </div>
        )
    }
    clickLogin=(e)=>{
        e.preventDefault()
        this.props.router.push(ROUTES.login)
    }
    changeCellphone=(e)=>{
        this.setState({
            cellphone:e.target.value
        })
    }
    changeConfirmCode=(e)=>{
        this.setState({
            confirmcode:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault()
        const {cellphone,confirmcode} = this.state
        if(!cellphone){
            messenger.showMsg({
                msg:'手机号码不能为空!'
            })
            return
        }
        if(!confirmcode){
            messenger.showMsg({
                msg:'验证码不能为空!'
            })
            return
        }
        request.get(`${Prefixs.user}?username=${this.state.cellphone}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            if (data.success) {
                this.props.router.push(ROUTES.editphone)
            }
        },webErrHandle)
    }
}

module.exports=withRouter(ForgetPwd)
