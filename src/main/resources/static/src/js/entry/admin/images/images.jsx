import React from 'react'

import BaseContent from '../component/basecontent/basecontent.jsx'
import Img from './img/img.jsx'

const imgs=[
    {src:'http://gtb.baidu.com/HttpService/get?p=dHlwZT1pbWFnZS9qcGVnJm49dmlzJnQ9YWRpbWcmYz10YjppZyZyPTQ4MjUyMjcyLDE2Mjk0MTUyNTIASn8&gp=0.jpg'},
    {src:'http://img4.imgtn.bdimg.com/it/u=4236942158,2307642402&fm=21&gp=0.jpg'}
]

class Images extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseContent>
                {this.renderImgs(imgs)}
            </BaseContent>
        )
    }
    renderImgs(images){
        return images.map((img,i)=>{
            return <Img key={i} src={img.src}/>
        })
    }
}
export default Images
