import React from 'react'
import styles from './webchatQrcode.css'
import {withRouter} from 'react-router'
import logo from './logo.png'
import webchatPic from './webchatPic.png'
import webchatPic2 from './webchatPic2.png'
import qqPic from './qqPic.png'
class WebchatQrcode extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.pageCont}>
                <div className={styles.inner}>
                    <div className={styles.imgContent}>
                        <h2 className={styles.title}>如何获取QQ/微信二维码</h2>
                    </div>
                    <div className={styles.logoCont}>
                        <img src={logo} alt="丰享logo"/>
                    </div>
                    <div className={styles.wordContent}>
                        <p>&nbsp;</p>
                        <p>在名片后台上传微信、QQ、微博二维码。对方打开你的名片时，可以长摁识别二维码直接加微信、
                            加QQ、关注微博；<span style={{color:'rgb(255, 0, 0)'}}>目前支持长摁识别二维码的app
                            包括微信、UC浏览器、QQ浏览器</span>，其他浏览器暂不支持长摁识别二维码！</p>
                        <ul className={styles.ulStyle}>
                            <li>
                                <p style={{marginTop:'10px',
                                        marginBottom:'10px',
                                        lineHeight:'2em'}}>
                                        如何获取
                                        <span style={{fontSize:'20px'}}>
                                            <strong>
                                                <span style={{color:'rgb(192,0,0)'}}>微信二维码
                                                </span>
                                            </strong>
                                        </span>
                                </p>
                            </li>
                        </ul>
                        <p style={{marginBottom:'5px',marginTop:'5px',
                            lineHeight:'normal'}}>
                            打开微信
                            <strong>→</strong>
                            我
                            <strong>→</strong>
                            点击昵称
                            <strong>→</strong>
                            二维码名片
                            <strong>→</strong>
                            点击右上角
                            <strong>→</strong>
                            保存到手机
                        </p>
                        <p style={{textAlign:'center'}}>
                            <img src={webchatPic} alt="获取微信二维码步骤" className={styles.qrcodeFunc}/>
                        </p>
                        <span style={{lineHeight:'normal',marginTop:'5px',
                                marginBottom:'5px',fontSize:'1.6rem'}}>
                            <hr/>
                            <hr/>
                        微信公众号后台→公众号设置→二维码下载
                        </span>
                        <hr/>
                        <hr/>
                        <p style={{textAlign:'center'}}>
                            <img src={webchatPic2} alt="保存微信二维码步骤" className={styles.qrcodeFunc}/>
                        </p>
                        <ul className={styles.ulStyle}>
                            <li>
                                <p style={{marginTop:'10px',
                                        marginBottom:'10px',
                                        lineHeight:'2em'}}>
                                        如何获取
                                        <span style={{fontSize:'20px'}}>
                                            <strong>
                                                <span style={{color:'rgb(192,0,0)'}}>QQ二维码
                                                </span>
                                            </strong>
                                        </span>
                                </p>
                            </li>
                        </ul>
                        <p style={{marginBottom:'5px',marginTop:'5px',
                            lineHeight:'normal'}}>
                            打开QQ
                            <strong>→</strong>
                            点击左上角头像
                            <strong>→</strong>
                            点击二维码
                            <strong>→</strong>
                            点击二维码大图
                            <strong>→</strong>
                            保存到手机
                        </p>
                        <p style={{textAlign:'center'}}>
                            <img src={qqPic} alt="获取qq二维码步骤" className={styles.qrcodeFunc}/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports=withRouter(WebchatQrcode)
