import React from 'react'

import styles from './EditSociety.css'
import cx from 'classnames'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'
import Popup from 'webfront.Popup'

class EditSociety extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subscription:'',
            qq:'',
            wechat:'',
            sinaMicroBlog:''
        }
    }

    changeSubscription(e){
        this.setState({
            subscription:e.target.value
        })
    }
    changeQQ(e){
        this.setState({
            qq:e.target.value
        })
    }
    changeWechat(e){
        this.setState({
            wechat:e.target.value
        })
    }
    changeSinaMicroBlog(e){
        this.setState({
            sinaMicroBlog:e.target.value
        })
    }
    render(){
        const {subscription,qq,wechat,sinaMicroBlog} = this.state
        const input1props = {
            tagName:'微信公众号',
            type:'text',
            defaultInfo:'请输入您的微信公众号',
            value:subscription
        }
        const input2props = {
            tagName:'QQ',
            type:'text',
            defaultInfo:'请输入您的QQ号',
            value:qq
        }
        const input3props = {
            tagName:'微信号',
            type:'text',
            defaultInfo:'请输入您的微信公众号',
            value:wechat
        }
        const input4props = {
            tagName:'新浪微博',
            type:'text',
            defaultInfo:'请输入您的新浪微博',
            value:sinaMicroBlog
        }
        return(
            <div className= {styles.wrapDivStyle}>
                <div className= {styles.myInfoMenu}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>社交信息</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <InputItem {...input1props}
                                onChange={(e)=>{this.changeSubscription(e)}}/>
                            <InputItem {...input2props}
                                onChange={(e)=>{this.changeQQ(e)}}/>
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeWechat(e)}}/>
                            <InputItem {...input4props}
                                onChange={(e)=>{this.changeSinaMicroBlog(e)}}/>
                        </ul>
                        <Button>保存</Button>
                    </section>
                </div>
                <Popup />
            </div>
        )
    }
}
module.exports=EditSociety
