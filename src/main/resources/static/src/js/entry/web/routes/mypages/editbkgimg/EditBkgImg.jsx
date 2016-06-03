import React from 'react'
import styles from './editBkgImg.css'
import cx from 'classnames'
import Button from 'webfront.Button'
import messenger from 'web.Messenger'
import ImgBox from 'webfront.Imgbox'
import request from 'superagent'
import {Prefixs} from 'web.Config'

class EditBkgImg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:true,
            imgs:[{
                imageUse:'BACKGROUND',
                name:'图1',
                path:'',
                type:'JPEG'
            }
            ],
            page:0,
            pagesize:4,
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
                    <Button><h2>使用背景</h2></Button>
                </div>
            </div>
        )
    }
    renderImgs(images,isSelectedPic){
        let size=[150,200]
        return images.map((img,i)=>{
            return (
                <ImgBox key={i} src={img.path} isSelected={img.id==isSelectedPic}
                onClick={()=>{this.onClick(img.id)}} size={size}/>
            )
        })
    }
    onClick(imgId){
        this.setState({
            isSelectedPic: imgId
        })
    }
    getBkgImages=()=>{
        request.get(
            `${Prefixs.usercard}`+
            `/getbkgimages?page=${this.state.page}&&pagesize=${this.state.pagesize}`
        ).then((res) => {
            const data = JSON.parse(res.text)
            if(data.success){
                this.setState({
                    imgs:data.data.data
                })
            }else {
                messenger.show({
                    msg:'获取背景图片失败'
                })
            }
        })
    }
    loadMoreImgs(){
        let {pagesize}=this.state
        this.setState({
            pagesize:pagesize+2
        },()=>{
            this.getBkgImages()
        })
    }
}

module.exports=EditBkgImg
