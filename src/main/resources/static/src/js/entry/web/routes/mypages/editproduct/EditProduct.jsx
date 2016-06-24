import React from 'react'

import styles from './editProduct.css'
import request from 'superagent'
import Auth from 'Auth'
import {Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
import cx from 'classnames'
import {withRouter} from 'react-router'
// import imgBtm from "http://7xiobb.com2.z0.glb.clouddn.com/img_eg_mainProduct.png"

class EditProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shareTitle:'公司有很多内容，网站，app等'
        }
    }
    changeShareTitle=(e)=>{
        this.setState({
            shareTitle:e.target.value
        })
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const {shareTitle} = this.state
        return(
            <div className= {styles.wrapDivStyle}>
                <div className={styles.pageCont}>
                    <div className = {styles.setHead}>
                        <section className={styles.sectionStyle}>
                            <h1 className={styles.h1Style}>产品&服务</h1>
                            <textarea className={styles.title}
                                value={shareTitle}
                                onChange={this.changeShareTitle}/>
                            <p className={styles.tips}>请控制在200个关键字以内</p>
                            <p className={cx(styles.pbtn,'flexbox','row-reverse')}>
                                <a className={styles.svbtn}
                                    onClick={this.handleSubmit}>保存</a>
                            </p>
                        </section>
                        <p className={styles.explain}>
                            <b className={styles.expB}>注:</b>
                            <span className={styles.expSpan}>
                                收藏您名片的朋友，包括陌生客户，可通过您填写的产品及服务关键字搜索到你的名片
                                ，为了获得更好的推广宣传效果，请认真、如实填写。
                            </span>
                        </p>
                        <div>
                            <h2 style={{
                                marginTop: '20px',
                                fontSize: '1.2rem',
                                color: '#5f6267'
                            }}>
                                样例:
                            </h2>
                            <div className={styles.imgBoxBtm}>
                                <img
                                    src="http://7xiobb.com2.z0.glb.clouddn.com/img_eg_mainProduct.png"
                                    style={{width:'100%'}}
                                    alt="搜企"/>
                            </div>
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
module.exports=withRouter(EditProduct)
