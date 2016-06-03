import React from 'react'

import styles from './EditSign.css'
import cx from 'classnames'
import Button from 'webfront.Button'
import request from 'superagent'
import messenger from 'web.Messenger'
import {Prefixs} from 'web.Config'
import Auth from 'Auth'
class EditSign extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signature:''
        }
    }
    changeSign(e){
        this.setState({
            signature:e.target.value
        })
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const {signature} = this.state
        return(
            <div className= {styles.wrapDivStyle}>
                <div className= {styles.pageCont}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>我的签名</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <div className={styles.wrapTextarea}>
                                <textarea className={styles.textarea}
                                    onChange={(e)=>{this.changeSign(e)}}
                                    value={signature}/>
                            </div>
                        </ul>
                        <Button onClick={this.handleSubmit}>保存</Button>
                    </section>
                </div>
            </div>
        )
    }
    handleSubmit=()=>{
        request.put(`${Prefixs.usercard}/signature`)
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
                    signature:data.data.signature
                })
            }else {
                messenger.showMsg({
                    msg:'获取名片信息失败！'
                })
            }
        })
    }
}
module.exports=EditSign
