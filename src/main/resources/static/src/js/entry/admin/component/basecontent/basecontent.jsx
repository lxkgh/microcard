import React,{PropTypes} from 'react'

import Content from 'admin.Content'
import request from 'superagent'
import BaseColumn from '../crudcolumn/crudcolumn.jsx'
import PageTool from '../pagetool/pagetool.jsx'
class BaseContent extends React.Component {
    constructor(props) {
        super(props)
        this.refresh=this.refresh.bind(this)
        this.add=this.add.bind(this)
    }
    render() {
        const {buttons,children,setData,getPageUrl} = this.props
        return (
            <Content>
                <BaseColumn buttons={buttons}/>
                {children}
                <PageTool ref="pageTool" setData={setData}
                    url={getPageUrl}/>
            </Content>
        )
    }
    refresh(){
        this.refs['pageTool'].refresh()
    }
    get(query,handleFn,errHandleFn){
        const {getUrl,defaultUrl} = this.props
        let url = this.getUrl(getUrl,defaultUrl)
        if (url =='') {
            return
        }
        request.get(`${url}?${query}`)
        .end((err,res)=>{
            if (!err) {
                const data = JSON.parse(res.text)
                if (data.success&&handleFn) {
                    handleFn(data)
                }else if (!data.success&&errHandleFn) {
                    errHandleFn(data)
                }
            }
        })
    }
    add(obj,handleFn,errHandleFn){
        const {addUrl,defaultUrl} = this.props
        let url = this.getUrl(addUrl,defaultUrl)
        if (url=='') {
            return
        }
        request.post(url)
        .send(obj)
        .set('Accept', 'application/json')
        .end((err, res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    if (handleFn) {
                        handleFn(data)
                    }else {
                        this.refresh()
                    }
                }else if(errHandleFn){
                    errHandleFn(data)
                }
            }
        })
    }
    edit(obj,handleFn,errHandleFn){
        const {editUrl,defaultUrl} = this.props
        let url = this.getUrl(editUrl,defaultUrl)
        if (url=='') {
            return
        }
        request.put(`${url}`)
        .send(obj)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    if (handleFn) {
                        handleFn(data)
                    }else {
                        this.refresh()
                    }
                }else if(errHandleFn){
                    errHandleFn(data)
                }
            }
        })
    }
    delete(query,handleFn,errHandleFn){
        const {deleteUrl,defaultUrl} = this.props
        let url = this.getUrl(deleteUrl,defaultUrl)
        if (url=='') {
            return
        }
        request.delete(`${url}?${query}`)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    if (handleFn) {
                        handleFn(data)
                    }else {
                        this.refresh()
                    }
                }else if(errHandleFn){
                    errHandleFn(data)
                }
            }
        })
    }
    getUrl(targetUrl,defaultUrl){
        let url = ''
        if (targetUrl!='') {
            url = targetUrl
        }else if (defaultUrl!='') {
            url = defaultUrl
        }
        return url
    }
}

BaseContent.defaultProps={
    buttons:[{desc:'新增'},{desc:'修改'},{desc:'刷新'},{desc:'删除'}],
    setData:()=>{},
    defaultUrl:'',
    getPageUrl:'',
    getUrl:'',
    addUrl:'',
    editUrl:'',
    deleteUrl:''
}

BaseContent.propTypes={
    buttons:PropTypes.arrayOf(PropTypes.object),
    setData:PropTypes.func,
    defaultUrl:PropTypes.string,
    getPageUrl:PropTypes.string,
    getUrl:PropTypes.string,
    addUrl:PropTypes.string,
    editUrl:PropTypes.string,
    deleteUrl:PropTypes.string
}

export default BaseContent
