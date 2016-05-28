import React from 'react'
import styles from './Login.css'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import cx from 'classnames'
import request from 'superagent'
import ROUTES from 'web.Config'
import {withRouter} from 'react-router'
import Auth from 'Auth'
import messenger from 'web.Messenger'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            check : true,
            username : '',
            password : ''
        }
    }
    handleChecked(){
        this.setState({
            check: !this.state.check
        })
    }
    onChangeUn(e){
        this.setState({
            username : e.target.value
        })
    }
    onChangePw(e){
        this.setState({
            password: e.target.value
        })
    }
    doSubmit(e){
        e.preventDefault()
        const user={
            username:this.state.username,
            password:this.state.password
        }
        request.post('/login')
          .send(user)
          .set('Content-Type','application/x-www-form-urlencoded')
          .end((err,res)=>{
              if (err) {
                  messenger.show()
                  return
              }
              const data=JSON.parse(res.text)
              if (data.success) {
                  Auth.login(()=>{this.props.router.push(ROUTES.home)},null)
              }else {
                  messenger.show()
              }
          })
    }
    clickRegister(){
        this.props.router.push(ROUTES.register)
    }
    render() {
        return (
            <div className={styles.myCont}>
                <section className={styles.myLogin}>
                    <div className={styles.loginHd}>
                        <Svg paths ={[svgIcons.microcard]}
                        size ={[128,128]} className={cx(styles.microcardSvg,styles.svg)}/>
                        <h2>丰享名片</h2>
                    </div>
                    <div className={styles.loginCont}>
                        <form onChange={this.submitForm}>
                            <ul>
                                <li className={styles.loginItem1}>
                                    <input type="tel"
                                            placeholder="手机号"
                                            autoComplete="off"
                                            value = {this.state.username}
                                            className={styles.loginIpt}
                                            onChange = {(e)=>this.onChangeUn(e)}/>
                                    <i></i>
                                </li>
                                <li className={styles.loginItem2}>
                                    <input type="password"
                                            placeholder="密码"
                                            autoComplete="off"
                                            value = {this.state.password}
                                            className={styles.loginIpt}
                                            onChange={(e)=>this.onChangePw(e)}/>
                                    <i></i>
                                </li>
                            </ul>
                            <div className={styles.fixed}>
                                <label>
                                    <input  className={styles.checked}
                                            type="checkbox"
                                            checked ={this.state.check}
                                            onChange={this.handleChecked.bind(this)}
                                            />
                                        下次自动登录
                                </label>
                                <a href="##">忘记密码？</a>
                            </div>
                            <div className={styles.logDiv}>
                                <input className={styles.loginBtn}
                                        type = "submit"
                                        onClick = {this.doSubmit.bind(this)}
                                        value = "登 录"/>
                            </div>
                        </form>
                        <div className={styles.rgtDiv}>
                            <input className={styles.rgtBtn}
                                        type= "button"
                                        value="注册"
                                        onClick={()=>{this.clickRegister()}}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

module.exports=withRouter(Login)
