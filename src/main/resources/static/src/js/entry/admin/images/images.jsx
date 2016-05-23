import React from 'react'

import request from 'superagent'

import {ImageApiPrefix} from '../config.jsx'

import BaseContent from '../component/basecontent/basecontent.jsx'
import Img from './img/img.jsx'

import AddModal from './modal/AddModal.jsx'

const imgs=[
    {src:'http://gtb.baidu.com/HttpService/get?p=dHlwZT1pbWFnZS9qcGVnJm49dmlzJnQ9YWRpbWcmYz10YjppZyZyPTQ4MjUyMjcyLDE2Mjk0MTUyNTIASn8&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'}
]

class Images extends React.Component {
    constructor(props) {
        super(props)
        this.buttons=[
            {desc:'新增',onClick:()=>{this.showAddModal()}}
        ]
    }
    render() {
        return (
            <BaseContent buttons={this.buttons}>
                <div className="flexbox wrap">
                    {this.renderImgs(imgs)}
                </div>
                <AddModal ref="addModal" onSubmit={(img)=>{this.onAddSubmit(img)}}/>
            </BaseContent>
        )
    }
    onAddSubmit(img){
        request.post(`${ImageApiPrefix}/add`)
        .send(img)
        .set('Accept', 'application/json')
        .end((err,res)=>{
            console.log(err,res);
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    console.log(data)
                }
            }
        })
    }
    showAddModal(){
        this.refs['addModal'].show()
    }
    hideAddModal(){
        this.refs['addModal'].hide()
    }
    renderImgs(images){
        return images.map((img,i)=>{
            return <Img key={i} src={img.src}/>
        })
    }
}
export default Images
