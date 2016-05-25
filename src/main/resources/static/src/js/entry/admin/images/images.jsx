import React,{PropTypes} from 'react'

import {ImageApiPrefix} from '../config.jsx'

import BaseContent from '../component/basecontent/basecontent.jsx'
import Img from './img/img.jsx'

import AddModal from './modal/AddModal.jsx'
import EditModal from './modal/EditModal.jsx'

class Images extends React.Component {
    constructor(props) {
        super(props)
        this.buttons=[
            {desc:'新增',onClick:()=>{this.showAddModal()}},
            {desc:'修改',onClick:()=>{this.showEditModal()}},
            {desc:'刷新',onClick:()=>{this.refresh()}},
            {desc:'删除',onClick:()=>{this.deleteImage()}}
        ]
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
                    {this.renderImgs(imgs,activeImg)}
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
        img.imageUse=this.props.route.imageUse
        this.refs['baseContent'].add(img,()=>{this.refresh()})
    }
    editImage(img){
        this.refs['baseContent'].edit(img,()=>{this.refresh()})
    }
    deleteImage(){
        const {activeImg} = this.state
        this.refs['baseContent'].delete(`id=${activeImg}`,()=>{this.refresh()})
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
    renderImgs(images,activeImg){
        return images.map((img,i)=>{
            return (
                <Img key={i} src={img.path} active={img.id==activeImg}
                onClick={()=>{this.onClick(img.id)}}/>
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
export default Images
