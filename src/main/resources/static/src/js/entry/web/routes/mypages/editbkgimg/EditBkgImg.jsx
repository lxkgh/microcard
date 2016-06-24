import React from 'react'
import styles from './editBkgImg.css'
import cx from 'classnames'
import Button from 'webfront.Button'
import messenger from 'web.Messenger'
import ImgBox from 'webfront.Imgbox'
import request from 'superagent'
import {Prefixs} from 'web.Config'
import {webErrHandle} from 'ErrHandles'

class EditBkgImg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:true,
            imgs:[],
            page:0,
            pagesize:5,
            isSelectedPic:''
        }
    }
    sysBkgImgBtn(){
        this.setState({
            active:!this.state.active
        })
    }
    customsizeBkgImgBtn(){
        messenger.showMsg({
            msg:'该功能不对普通用户开放'
        })
    }
    componentDidMount() {
        this.getBkgImages()
    }
    render(){
        const {active,imgs,isSelectedPic} = this.state
        const tabBtnStyle = {
            borderBottom: 'solid 3px transparent',
            display: 'inline-block',
            padding: '12px 5px',
            margin: '0 10px',
            fontSize: '1.5rem',
            color: active? '#0079ff':'#8f8f8f',
            borderColor:active?'#0079ff':null
        }
        return(
            <div>
                <div className= {styles.pageCont}>
                    <div className={styles.bkgImgBox}>
                        <div className={styles.tabBox}>
                            <a style={tabBtnStyle}
                                onClick={()=>{this.sysBkgImgBtn()}}>系统默认</a>
                            <a className={styles.tabBtn}
                                onClick={()=>{this.customsizeBkgImgBtn()}}>自定义背景</a>
                        </div>
                        <div className={cx('flexbox','wrap')}>
                            {this.renderImgs(imgs,isSelectedPic)}
                        </div>
                        <div className={styles.loadMoreImgs}
                            onClick={()=>{this.loadMoreImgs()}}>点击加载更多</div>
                    </div>
                </div>
                <div className = {styles.footer}>
                    <Button onClick={()=>{this.submitBkgImg()}}>
                        <h2>使用背景</h2>
                    </Button>
                </div>
            </div>
        )
    }
    renderImgs(images,isSelectedPic){
        let size=[150,200]
        return images.map((img,i)=>{
            return (
                <ImgBox key={i} src={img.path} isSelected={img.id==isSelectedPic}
                onClick={()=>{this.onClick(img.id,img.path)}} size={size}/>
            )
        })
    }
    onClick(imgId){
        this.setState({
            isSelectedPic: imgId
        })
    }
    submitBkgImg=()=>{
        request.put(`${Prefixs.usercard}/setbkgimg?`+
            `imgId=${this.state.isSelectedPic}`)
        .send()
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
        },webErrHandle)
    }
    getBkgImages=()=>{
        request.get(
            `${Prefixs.usercard}`+
            `/getbkgimages?page=${this.state.page}&&pagesize=${this.state.pagesize}`
        ).then((res) => {
            const data = JSON.parse(res.text)
            if(data.success){
                this.setState({
                    imgs:this.state.imgs.concat(data.data.data)
                })
            }else {
                messenger.show({
                    msg:'获取背景图片失败'
                })
            }
        },webErrHandle)
    }
    loadMoreImgs(){
        this.setState({
            pagesize:5,
            page:this.state.page+1
        },()=>{
            this.getBkgImages()
        })
    }
}

module.exports=EditBkgImg
