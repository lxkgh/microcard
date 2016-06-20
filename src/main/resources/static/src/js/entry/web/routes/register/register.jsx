import React from 'react'

import {withRouter} from 'react-router'
import styles from './Register.css'
import request from 'superagent'
import Carousel from 'Carousel'
import img1 from './微名片.png'
import img2 from './图二.png'
import img3 from './图三.png'
import {webErrHandle} from 'ErrHandles'
import messenger from 'web.Messenger'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            phone:'',
            code:'',
            time:0
        }
    }
    clickLogin(){
        this.props.router.push('/login')
    }
    handleChangePhone=(e)=>{
        this.setState({
            phone: e.target.value
        })
    }
    handleChangeCode=(e)=>{
        this.setState({
            code: e.target.value
        })
    }
    startTick=()=>{
        if (this.state.time > 0) {
            this.startTick()
        }
        this.setState({
            time: this.state.time-1
        })
    }
    componentDidUpdate() {
        if (this.state.time > 0) {
            this.tick()
        }
    }
    tick=()=>{
        setTimeout(()=>{this.setState({
            time: this.state.time - 1
        })},1000)
    }
    render(){
        const logoPic = {
            imgs:[img1,img2,img3],
            height:'100%',
            width:'100%'
        }
        const {phone,code,time} = this.state
        const timeTick = time==0?'| 获取验证码':`${time}s`
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
                                    value = {phone}
                                    onChange = {this.handleChangePhone}
                                    className = {styles.mobile}
                                    placeholder="请输入手机号"/>
                        </label>
                        <label className={styles.seclb}>
                            <input type="text"
                                    id = "code"
                                    value = {code}
                                    onChange = {this.handleChangeCode}
                                    className = {styles.checkCode}
                                    placeholder = "请输入验证码"/>
                            <input type="button"
                                    onClick = {this.handleGetCode}
                                    className={styles.getCheckCode}
                                    value = {timeTick}/>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
    handleGetCode=()=>{
        const {time} = this.state
        if (time==0) {
            this.code = Math.ceil(Math.random()*10000)
            request.post('/api/message/send')
                .send({phone:this.state.phone,msg:`验证码是${this.code}`})
                .then((res)=>{
                    const data = JSON.parse(res.text)
                    if (data.success) {
                        this.setState({
                            time:120
                        })
                    }else {
                        messenger.show({
                            msg:'获取背景图片失败'
                        })
                    }
                },webErrHandle)
        }
    }
}
module.exports=withRouter(Register)
