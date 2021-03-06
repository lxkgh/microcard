import React,{PropTypes} from 'react'

import {ImageApiPrefix} from 'admin.Config'

import BaseContent from '../../../component/basecontent/basecontent.jsx'
import Img from './img/img.jsx'

import AddModal from './modal/AddModal.jsx'
import EditModal from './modal/EditModal.jsx'

import Tip from 'Tip'

class Images extends React.Component {
    constructor(props) {
        super(props)
        this.buttons=[
            {desc:'新增',onClick:()=>{this.showAddModal()}},
            {desc:'修改',onClick:()=>{this.showEditModal()}},
            {desc:'刷新',onClick:()=>{this.refresh()}},
            {desc:'删除',onClick:()=>{this.deleteImage()}}
        ]
        this.isAdding = false
        this.state={imgs:[],activeImg:''}
    }
    render() {
        const {imgs,activeImg} = this.state
        const {imageUse} = this.props.route
        return (
            <BaseContent ref="baseContent" buttons={this.buttons}
                setData={(data)=>{this.setImgs(data)}}
                getPageUrl={`${ImageApiPrefix}/page`}
                getPageQuery={`imageUse=${imageUse}`}
                defaultUrl={`${ImageApiPrefix}`}>
                <div className="flexbox wrap">
                    {this.renderImgs(imgs,activeImg,imageUse)}
                </div>
                <AddModal ref="addModal" onSubmit={(img)=>{this.addImage(img)}}/>
                <EditModal ref="editModal" onSubmit={(img)=>{this.editImage(img)}}/>
            </BaseContent>
        )
    }
    refresh(){
        this.hideAddModal()
        this.hideEditModal()
        this.refs['baseContent'].refresh()
    }
    setImgs(imgs){
        this.setState({
            imgs: imgs
        })
    }
    getImage(handleFn){
        const {activeImg} = this.state
        if (activeImg=='') {return}
        this.refs['baseContent'].get(`id=${activeImg}`,(data)=>{
            handleFn(data.data)
        })
    }
    addImage(img){
        if (!this.isAdding) {
            this.isAdding = true
            img.imageUse=this.props.route.imageUse
            this.refs['baseContent'].add(
                img,
                (data)=>{
                    Tip.showSuccess(data.desc)
                    this.refresh()
                    this.isAdding = false
                },
                (data)=>{
                    Tip.showDanger(data.desc)
                    this.isAdding = false
                }
            )
        }else {
            Tip.showWarning('正在上传图片中...！')
        }
    }
    editImage(img){
        this.refs['baseContent'].edit(
            img,
            (data)=>{
                Tip.showSuccess(data.desc)
                this.refresh()
            },
            (data)=>{
                Tip.showDanger(data.desc)
            }
        )
    }
    deleteImage(){
        const {activeImg} = this.state
        this.refs['baseContent'].delete(
            `id=${activeImg}`,
            (data)=>{
                Tip.showSuccess(data.desc)
                this.refresh()
            },
            (data)=>{
                Tip.showDanger(data.desc)
            }
        )
    }
    showAddModal(){
        this.refs['addModal'].show()
    }
    hideAddModal(){
        this.refs['addModal'].hide()
    }
    showEditModal(){
        this.getImage(this.refs['editModal'].show)
    }
    hideEditModal(){
        this.refs['editModal'].hide()
    }
    renderImgs(images,activeImg,imageUse){
        let size=null
        if (imageUse=='BACKGROUND') {
            size=[240,360]
        }else {
            size=[150,150]
        }
        return images.map((img,i)=>{
            return (
                <Img key={i} src={img.path} active={img.id==activeImg}
                onClick={()=>{this.onClick(img.id)}} size={size}/>
            )
        })
    }
    onClick(imgId){
        this.setState({
            activeImg: imgId
        })
    }
}
Images.propTypes={
    route:PropTypes.object.isRequired
}
module.exports=Images
