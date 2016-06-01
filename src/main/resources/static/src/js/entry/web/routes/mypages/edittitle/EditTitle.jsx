import React from 'react'

import styles from './EditTitle.css'
import request from 'superagent'
import Auth from 'Auth'
import {Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
import cx from 'classnames'

class EditTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shareTitle:'',
            shareAbstract:''
        }
    }
    changeShareTitle=(e)=>{
        this.setState({
            shareTitle:e.target.value
        })
    }
    changeShareAbstract=(e)=>{
        this.setState({
            shareAbstract: e.target.value
        })
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const {shareTitle,shareAbstract} = this.state
        return(
            <div className= {styles.wrapDivStyle}>
                <div className={styles.content}>
                    <div className = {styles.setHead}>
                        <section className={styles.sectionStyle}>
                            <h1 className={styles.h1Style}>设置名片分享标题</h1>
                            <textarea className={styles.title}
                                value={shareTitle}
                                onChange={this.changeShareTitle}/>
                            <p className={styles.tips}>字数不超过30个字</p>
                            <h1 className={styles.h1Style}>分享摘要</h1>
                            <textarea className={styles.title}
                                value={shareAbstract}
                                onChange={this.changeShareAbstract}/>
                            <p className={styles.tips}>字数不超过60个字</p>
                            <p className={cx(styles.pbtn,'flexbox','row-reverse')}>
                                <a className={styles.svbtn}
                                    onClick={this.handleSubmit}>保存</a>
                            </p>
                        </section>
                        <div className={styles.msg}>
                            <span className={styles.spanStyle}>如何使用微信微名片</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleSubmit=()=>{
        request.put(`${Prefixs.usercard}/shareinfo`)
        .send(this.state)
        .end((err,res)=>{
            if (err) {
                messenger.showMsg({
                    msg:err.message
                })
                return
            }
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            this.getUserCard()
        })
    }
    getUserCard=()=>{
        request.get(`${Prefixs.usercard}?userId=${Auth.getUserId()}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            if (data.success) {
                this.setState({
                    shareTitle:data.data.shareTitle,
                    shareAbstract:data.data.shareAbstract
                })
            }else {
                messenger.showMsg({
                    msg:'获取分享标题失败！'
                })
            }
        })
    }
}
module.exports=EditTitle
