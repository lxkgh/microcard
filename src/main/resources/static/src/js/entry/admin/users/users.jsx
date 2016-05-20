import React from 'react'
import request from 'superagent'

import {ApiPrefix} from '../config.jsx'

import Content from 'admin.Content'
import BaseColumn from '../component/crudcolumn/crudcolumn.jsx'
import BaseTable from '../component/basetable/basetable.jsx'
import PageTool from '../component/pagetool/pagetool.jsx'

import AddModal from './AddModal.jsx'
import EditModal from './EditModal.jsx'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users:[]
        }
        this.buttons=[
            {desc:'新增',onClick:()=>{this.showAddModal()}},
            {desc:'修改',onClick:()=>{this.showEditModal()}},
            {desc:'刷新',onClick:()=>{this.refresh()}},
            {desc:'删除',onClick:()=>{this.delete()}}
        ]
        this.userTable={
            header:['用户名','真实姓名','角色'],
            percents:['40%','40%','20%'],
            keys:['username','realname','role'],
            body:this.state.users,
            id:'username'
        }
    }
    componentDidMount() {
        this.refs['pageTool'].refresh()
    }
    render() {
        return (
            <Content className="flex">
                <BaseColumn buttons={this.buttons}/>
                <div style={{width:'100%',margin:'20px 0'}}>
                    <BaseTable ref="baseTable" {...this.userTable} />
                </div>
                <PageTool ref="pageTool" setData={(data)=>{this.setData(data)}}
                    url={`${ApiPrefix}/get/userpage`}/>
                <AddModal ref="addModal" onSubmit={(user)=>{this.addUser(user)}}/>
                <EditModal ref="editModal" onSubmit={(user)=>{this.updateUser(user)}}/>
            </Content>
        )
    }
    showAddModal(){
        this.refs['addModal'].show()
    }
    hideAddModal(){
        this.refs['addModal'].hide()
    }
    showEditModal(){
        this.getUser(this.refs['editModal'].show)
    }
    hideEditModal(){
        this.refs['editModal'].hide()
    }
    setData(data){
        this.userTable.body=data
        this.setState({
            users:data
        })
    }
    refresh(){
        this.hideAddModal()
        this.hideEditModal()
        this.refs['pageTool'].refresh()
    }
    addUser(user){
        request.post(`${ApiPrefix}/add/user`)
        .send(user)
        .set('Accept', 'application/json')
        .end((err, res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    this.hideAddModal()
                    this.refs['pageTool'].refresh()
                }
            }
        })
    }
    updateUser(user){
        request.put(`${ApiPrefix}/put/user`)
        .send(user)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    this.refresh()
                }
            }
        })
    }
    delete(){
        const username=this.refs['baseTable'].getActiveId()
        request.delete(`${ApiPrefix}/delete/user/${username}`)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    this.refresh()
                }
            }
        })
    }
    getUser(handleFunc){
        const username=this.refs['baseTable'].getActiveId()
        if (username) {
            request.get(`${ApiPrefix}/get/user/${username}`)
            .end((err,res)=>{
                if (!err) {
                    const data = JSON.parse(res.text)
                    handleFunc(data.data)
                }
            })
        }
    }
}

export default Users
