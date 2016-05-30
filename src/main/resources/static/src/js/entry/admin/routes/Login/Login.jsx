import React from 'react'
import styles from './Login.css'
import Input from 'Input'
import Button from 'Button'
import Auth from 'Auth'
import Tip from 'Tip'
import {withRouter} from 'react-router'
import ROUTES from 'admin.Config'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        const {username, password} = this.state
        return (
            <div className={styles.login}>
                <div className={styles.wrapper}>
                    <div className={styles.loginForm}>
                        <div className={styles.header}>丰享后台管理</div>
                        <div className={styles.body}>
                            <div className={styles.item}>
                                <Input placeholder="账号" value={username}
                                    onChange={this.changeUsername}/>
                            </div>
                            <div className={styles.item}>
                                <Input placeholder="密码" value={password}
                                    onChange={this.changePassword}/>
                            </div>
                            <div className={styles.item}>
                                <Button bstyle="primary" style={{width:'100%',height:'36px'}}
                                    onClick={this.handleLogin}>
                                    登录
                                </Button>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            {'@2015华恩教育-itbegin，浙ICP备11038457号'}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    changeUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleLogin=()=>{
        const user={
            username:this.state.username,
            password:this.state.password
        }
        Auth.loginServer(
            user,
            ()=>{
                Auth.loginClient(
                    ()=>{this.props.router.push(ROUTES.users)},
                    ()=>{Tip.showDanger('该账号不是管理员帐号！')}
                )
            },
            ()=>{
                Tip.showDanger('登陆失败，请确保账户、密码正确！')
            },
            (err)=>{Tip.showDanger(err.message)}
        )
    }
}
module.exports = withRouter(Login)
