import React from 'react'
import styles from './resetPwd.css'
import cx from 'classnames'
import {withRouter} from 'react-router'
import key from './key.png'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'
import ROUTES from 'web.Config'
import ShowPwd from 'webfront.ShowPwd'
class ResetPwd extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            check : true,
            cellphone : '',
            confirmcode : '',
            pwdVisible:false
        }
    }
    render() {
        const {cellphone,confirmcode,pwdVisible} = this.state
        const confirmcodeProps = {
            defaultInfo:'确认密码',
            value:confirmcode,
            InputItemType:'short',
            hasTagName:false,
            borderRadius:'5px',
            type:pwdVisible?'text':'password'
        }
        const cellphoneProps = {
            defaultInfo:'新密码',
            value:cellphone,
            InputItemType:'short',
            hasTagName:false,
            marginBottom:'25px',
            borderRadius:'5px',
            type:pwdVisible?'text':'password'
        }
        const iconProps = {
            divStyle:{
                position:'absolute',
                top:'75px',
                right:'50px'
            },
            iconStyle:{
                fill:'#4F4F4F'
            },
            iconSize:32
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
                    <h2 style={{marginBottom :'20px'}}>重设密码</h2>
                    <form className={styles.formStyle}>
                        <InputItem {...cellphoneProps}
                            onChange={this.changeCellphone}
                            className={styles.inputItem}/>
                        <ShowPwd {...iconProps}
                            onClick={()=>{this.pwdVisible()}}
                            ref="showPwd"/>
                        <InputItem {...confirmcodeProps}
                            onChange={(e)=>{this.changeConfirmCode(e)}}/>
                    </form>
                    <Button className={styles.nextBtn}>
                        <h2>下一步</h2>
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
    pwdVisible=()=>{
        this.setState({
            pwdVisible:!this.state.pwdVisible
        })
        this.refs.showPwd.setState({
            visible:!this.refs.showPwd.state.visible
        })
    }
}

module.exports=withRouter(ResetPwd)
