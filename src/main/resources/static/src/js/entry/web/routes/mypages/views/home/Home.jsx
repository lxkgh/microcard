import React,{PropTypes} from 'react'
import styles from './Home.css'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import cx from 'classnames'
import MenuBoxItem from 'webfront.MenuBoxItem'
import fileSvgIcons from './HomeSvg.js'
import defaultPortait from './头像默认.png'
import img1 from './主页轮播1.jpg'
import img2 from './主页轮播2.jpg'
import img3 from './主页轮播3.jpg'
import Carousel from 'Carousel'
import ROUTES,{Prefixs} from 'web.Config'
import request from 'superagent'
import Auth from 'Auth'
import messenger from 'web.Messenger'
import {webErrHandle} from 'ErrHandles'
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            job:'',
            userIcon:null,
            image:'',
            type:''
        }
    }
    clickEditcard(){
        this.context.router.push(ROUTES.editcard)
    }
    clickMyCard(){
        this.context.router.push(ROUTES.mycard)
    }
    clickMore(){
        this.setContactList()
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const portrait = {
            fill:'d3d9dd'
        }
        const MenuBoxItem1Props = {
            num:3,
            itemSvg:svgIcons.card,
            size:32,
            svgColor:'rgb(65, 204, 249)',
            name:'编辑名片'
        }
        const MenuBoxItem2Props = {
            num:3,
            itemSvg:svgIcons.card,
            size:32,
            svgColor:'rgb(65, 204, 249)',
            name:'我的名片'
        }
        const MenuBoxItem4Props = {
            num:3,
            itemSvg:svgIcons.threePoints,
            size:32,
            svgColor:'#d3d9dd',
            name:'更多'
        }
        const MenuBoxItem3Props = {
            num:3,
            itemSvg:fileSvgIcons.mapIcon,
            size:32,
            svgColor:'#ea8010',
            name:'地图导航'
        }
        const CarouselPic = {
            imgs:[img1,img2,img3],
            height:'100%',
            width:'100%'
        }
        const {name,job,userIcon} = this.state
        let icon = defaultPortait
        if (userIcon) {
            icon = userIcon.path
        }
        return(
            <div className={styles.pageCont}>
                <section className={cx(styles.item,styles.shadow)}>
                    <div className={styles.iconfont}>
                        <Svg paths={[svgIcons.mine]}
                            size={[0,0]}
                            position={[3,3]}
                            style={{portrait}}/>
                        <img src={icon}
                            className={styles.headImg}/>
                        <input type="file" className={styles.uploadIcon}
                            onChange={this.changeImage}/>
                    </div>
                    <div className={styles.info}>
                        <h1>{name}</h1>
                        <h3 className={styles.h3}>{job}</h3>
                    </div>
                </section>
                <div className={styles.crousel}>
                    <Carousel {...CarouselPic}/>
                </div>
                <div className={styles.menuBox}>
                    <ul className={styles.menuBoxUl}>
                        <MenuBoxItem {...MenuBoxItem1Props}
                            onClick={()=>{this.clickEditcard()}}/>
                        <MenuBoxItem {...MenuBoxItem2Props}
                            onClick={()=>{this.clickMyCard()}}/>
                        <MenuBoxItem {...MenuBoxItem3Props}
                            onClick={()=>{this.clickMore()}}/>
                        <MenuBoxItem {...MenuBoxItem4Props}/>
                    </ul>
                </div>
            </div>
        )
    }
    handleUploadIcon=(e)=>{
        e.preventDefault()
        messenger.hide()
        const {type, image} = this.state
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
        request.put(`${Prefixs.usercard}/usericon`)
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
    changeImage=(e)=>{
        let file = e.target.files[0]
        let reader = new FileReader()
        if (file===undefined) {
            this.setState({image: '',type:''})
            return
        }
        reader.onload = (upload) => {
            this.setState({image: upload.target.result,type:file.type})
            messenger.showPopConfirm({
                body:'是否上传头像',
                buttons:[
                    {
                        desc:'取消',
                        onClick:messenger.hide
                    },
                    {
                        desc:'确认',
                        onClick:this.handleUploadIcon
                    }
                ]
            })
        }
        reader.readAsDataURL(file)
    }
    getUserCard=()=>{
        request.get(`${Prefixs.usercard}?userId=${Auth.getUserId()}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            if (data.success) {
                this.setState({
                    name:data.data.name,
                    job:data.data.job,
                    userIcon:data.data.userIcon
                })
            }else {
                messenger.showMsg({
                    msg:'获取名片信息失败！'
                })
            }
        },webErrHandle)
    }
    setContactList=()=>{
        request.put(`${Prefixs.usercard}/setcontactlist`+
        '?contactId=575f5fe2d4c670916c41a40c')
        .then((res)=>{
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
        },webErrHandle)
    }
}
HomePage.contextTypes = {
    router:PropTypes.object
}
module.exports=HomePage
