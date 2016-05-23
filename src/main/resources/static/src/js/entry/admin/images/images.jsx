import React from 'react'

import request from 'superagent'

import {ImageApiPrefix} from '../config.jsx'

import BaseContent from '../component/basecontent/basecontent.jsx'
import Img from './img/img.jsx'

import AddModal from './modal/AddModal.jsx'

class Images extends React.Component {
    constructor(props) {
        super(props)
        this.buttons=[
            {desc:'新增',onClick:()=>{this.showAddModal()}}
        ]
        this.state={imgs:[]}
    }
    render() {
        const {imgs} = this.state
        return (
            <BaseContent buttons={this.buttons}
                setData={(data)=>{this.setImgs(data)}}
                url={`${ImageApiPrefix}/page`}>
                <div className="flexbox wrap">
                    {this.renderImgs(imgs)}
                </div>
                <AddModal ref="addModal" onSubmit={(img)=>{this.addImage(img)}}/>
            </BaseContent>
        )
    }
    setImgs(imgs){
        this.setState({
            imgs: imgs
        })
    }
    addImage(img){
        request.post(`${ImageApiPrefix}`)
        .send(img)
        .set('Accept', 'application/json')
        .end((err,res)=>{
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
            return <Img key={i} src={img.path}/>
        })
    }
}
export default Images
