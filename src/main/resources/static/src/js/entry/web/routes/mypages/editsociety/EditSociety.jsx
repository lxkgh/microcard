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
import ROUTES,{Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
import {webErrHandle} from 'ErrHandles'
import {withRouter} from 'react-router'
const Kinds={
    qqQRCode:{
        name:'qqQRCode',
        url:'qqqrcode'
    },
    weChatQRCode:{
        name:'weChatQRCode',
        url:'wechatqrcode'
    }
}

class EditSociety extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qq:'',
            qqQRCode:{
                image:'',
                type:''
            },
            weChat:'',
            weChatQRCode:{
                image:'',
                type:''
            }
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
        const titleSvgStyle = {
            fill:'#ea8010',
            marginLeft:'5px'
        }
        const qrcodeSvgStyle = {
            fill:'#7f7f7f'
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
            defaultInfo:'请输入您的微信号',
            value:weChat
        }
        const codeBar2props = {
            QRcodeName:'QQ二维码',
            QRLink:'',
            QRLinkTitle:'如何获取QQ号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32,
            titleSvgSize:16,
            titleSvg:fileSvgIcons.help,
            titleSvgStyle:titleSvgStyle,
            qrcodeSvgStyle:qrcodeSvgStyle,
            titleClick:this.titleClick
        }
        const codeBar3props = {
            QRcodeName:'微信二维码',
            QRLink:'',
            QRLinkTitle:'如何获取微信号二维码',
            QRcodeSvg:fileSvgIcons.QRcode,
            svgSize:32,
            titleSvgSize:16,
            titleSvg:fileSvgIcons.help,
            titleSvgStyle:titleSvgStyle,
            qrcodeSvgStyle:qrcodeSvgStyle,
            titleClick:this.titleClick
        }
        return (
            <div className= {styles.wrapDivStyle}>
                <div className= {styles.pageCont}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>社交信息</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <InputItem {...input2props}
                                onChange={(e)=>{this.changeQQ(e)}}/>
                            {qq?<QRcodeBar {...codeBar2props}>
                                <input type="file" className={styles.uploadInput}
                                    onChange={(e)=>{
                                        this.changeQRCode(e,Kinds['qqQRCode'])
                                    }}/>
                            </QRcodeBar>:null}
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeWechat(e)}}/>
                            {weChat?<QRcodeBar {...codeBar3props}>
                                <input type="file" className={styles.uploadInput}
                                    onChange={(e)=>{
                                        this.changeQRCode(e,Kinds['weChatQRCode'])
                                    }}/>
                            </QRcodeBar>:null}
                        </ul>
                        <Button onClick={this.handleSubmit}>保存</Button>
                    </section>
                </div>
                <Popup />
            </div>
        )
    }
    titleClick=(e)=>{
        e.preventDefault()
        this.props.router.push(ROUTES.webchatQrcode)
    }
    handleUploadIcon=(e,kind)=>{
        e.preventDefault()
        messenger.hide()
        const {type, image} = this.state[kind.name]
        if (!type) {
            messenger.showMsg({
                msg:'请选择上传图片'
            })
            return
        }
        let shortType=type.split('/')[1]
        if (!shortType) {
            messenger.showMsg({
                msg:'文件类型不能识别，请确保文件类型正确！'
            })
            return
        }
        shortType=shortType.toUpperCase()
        if(shortType!='JPEG'&&shortType!='PNG'){
            messenger.showMsg({
                msg:'请上传jpg或png图片'
            })
            return
        }
        const img={
            data:image,
            type:shortType
        }
        request.put(`${Prefixs.usercard}/${kind.url}`)
        .send(img)
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            if (data.data) {
                this.setState({
                    userIcon:data.data
                })
            }
        },webErrHandle)
    }
    changeQRCode=(e,kind)=>{
        let file = e.target.files[0]
        let reader = new FileReader()
        if (file===undefined) {
            this.setState({[kind.name]:{image: '',type:''}})
            return
        }
        reader.onload = (upload) => {
            this.setState({[kind.name]:{image: upload.target.result,type:file.type}})
            messenger.showPopConfirm({
                body:'是否上传二维码',
                buttons:[
                    {
                        desc:'取消',
                        onClick:messenger.hide
                    },
                    {
                        desc:'确认',
                        onClick:(ee)=>{this.handleUploadIcon(ee,kind)}
                    }
                ]
            })
        }
        reader.readAsDataURL(file)
    }
    handleSubmit=()=>{
        const societyinfo={
            qq:this.state.qq,
            weChat:this.state.weChat
        }
        request.put(`${Prefixs.usercard}/societyinfo`)
        .send(societyinfo)
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            this.getUserCard()
        },webErrHandle)
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
        },webErrHandle)
    }
}

module.exports=withRouter(EditSociety)
