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
            qq:'',
            wechat:'',
            showQQ:false,
            showWebchat:false
        }
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
    render(){
        const topbarProps = {
            desc:'修改个人社交信息'
        }
        const {qq,wechat} = this.state
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
            value:wechat
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
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeWechat(e)}}/>
                            {this.state.showWebchat?<QRcodeBar {...codeBar3props}/>:null}
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
