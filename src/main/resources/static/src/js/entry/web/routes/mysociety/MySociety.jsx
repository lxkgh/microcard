import React from 'react'
import QRcodeBar from 'webfront.QRcodeBar'
import Topbar from 'topbar'
import styles from './mySociety.css'
import cx from 'classnames'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'
import Popup from 'webfront.Popup'
import fileSvgIcons from './mySocietySvg.js'

class MySociety extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subscription:'',
            qq:'',
            wechat:'',
            sinaMicroBlog:'',
            showSubScription:false,
            showQQ:false,
            showWebchat:false,
            showSinaMicroBlog:false
        }
    }

    changeSubscription(e){
        this.setState({
            subscription:e.target.value,
            showSubScription: Boolean(e.target.value)
        })
    }
    changeQQ(e){
        this.setState({
            qq:e.target.value,
            showQQ: Boolean(e.target.value)
        })
    }
    changeWechat(e){
        this.setState({
            wechat:e.target.value,
            showWebchat: Boolean(e.target.value)
        })
    }
    changeSinaMicroBlog(e){
        this.setState({
            sinaMicroBlog:e.target.value,
            showSinaMicroBlog: Boolean(e.target.value)
        })
    }
    render(){
        const topbarProps = {
            desc:'修改个人社交信息'
        }
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
        const codeBar1props = {
            QRcodeName:'微信公众号二维码',
            QRLink:'',
            QRLinkTitle:'如何获取微信公众号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32
        }
        const codeBar2props = {
            QRcodeName:'QQ二维码',
            QRLink:'',
            QRLinkTitle:'如何获取微信公众号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32
        }
        const codeBar3props = {
            QRcodeName:'微信二维码',
            QRLink:'',
            QRLinkTitle:'如何获取微信公众号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32
        }
        const codeBar4props = {
            QRcodeName:'微博二维码',
            QRLink:'',
            QRLinkTitle:'如何获取微信公众号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32
        }
        return(
            <div className= {styles.wrapDivStyle}>
                <Topbar {...topbarProps}/>
                <div className= {styles.myInfoMenu}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>社交信息</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <InputItem {...input1props}
                                onChange={(e)=>{this.changeSubscription(e)}}/>
                            {this.state.showSubScription?<QRcodeBar {...codeBar1props}/>:null}
                            <InputItem {...input2props}
                                onChange={(e)=>{this.changeQQ(e)}}/>
                            {this.state.showQQ?<QRcodeBar {...codeBar2props}/>:null}
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeWechat(e)}}/>
                            {this.state.showWebchat?<QRcodeBar {...codeBar3props}/>:null}
                            <InputItem {...input4props}
                                onChange={(e)=>{this.changeSinaMicroBlog(e)}}/>
                            {this.state.showSinaMicroBlog?<QRcodeBar {...codeBar4props}/>:null}
                        </ul>
                        <Button>保存</Button>
                    </section>
                </div>
                <Popup />
            </div>
        )
    }
}
module.exports=MySociety
