import React from 'react'
import QRcodeBar from 'webfront.QRcodeBar'
import styles from './EditSociety.css'
import cx from 'classnames'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'
import Popup from 'webfront.Popup'
import fileSvgIcons from './EditSocietySvg.js'
import request from 'superagent'
import Auth from 'Auth'
import {Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
class EditSociety extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qq:'',
            weChat:''
        }
    }
    changeQQ(e){
        this.setState({
            qq:e.target.value
        })
    }
    changeWechat(e){
        this.setState({
            weChat:e.target.value
        })
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const {qq,weChat} = this.state
        const input2props = {
            tagName:'QQ',
            type:'text',
            defaultInfo:'请输入您的QQ号',
            value:qq
        }
        const input3props = {
            tagName:'微信号',
            type:'text',
            defaultInfo:'请输入您的微信号',
            value:weChat
        }
        const codeBar2props = {
            QRcodeName:'QQ二维码',
            QRLink:'',
            QRLinkTitle:'如何获取QQ号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32
        }
        const codeBar3props = {
            QRcodeName:'微信二维码',
            QRLink:'',
            QRLinkTitle:'如何获取微信号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32
        }
        return(
            <div className= {styles.wrapDivStyle}>
                <div className= {styles.myInfoMenu}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>社交信息</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <InputItem {...input2props}
                                onChange={(e)=>{this.changeQQ(e)}}/>
                            {qq?<QRcodeBar {...codeBar2props}/>:null}
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeWechat(e)}}/>
                            {weChat?<QRcodeBar {...codeBar3props}/>:null}
                        </ul>
                        <Button onClick={this.handleSubmit}>保存</Button>
                    </section>
                </div>
                <Popup />
            </div>
        )
    }
    handleSubmit=()=>{
        request.put(`${Prefixs.usercard}/societyinfo`)
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
                    qq:data.data.qq,
                    weChat:data.data.weChat
                })
            }else {
                messenger.showMsg({
                    msg:'获取社交信息失败！'
                })
            }
        })
    }
}
module.exports=EditSociety
