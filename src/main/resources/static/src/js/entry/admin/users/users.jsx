import React from 'react'
import request from 'superagent'

import {UserApiPrefix} from '../config.jsx'

import BaseContent from '../component/basecontent/basecontent.jsx'
import BaseTable from '../component/basetable/basetable.jsx'

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
    render() {
        return (
            <BaseContent ref="content" buttons={this.buttons}
                setData={(data)=>{this.setData(data)}}
                url={`${UserApiPrefix}/get/page`}>
                <BaseTable ref="baseTable" {...this.userTable} />
                <AddModal ref="addModal" onSubmit={(user)=>{this.addUser(user)}}/>
                <EditModal ref="editModal" onSubmit={(user)=>{this.updateUser(user)}}/>
            </BaseContent>
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
        this.refs['content'].refresh()
    }
    addUser(user){
        request.post(`${UserApiPrefix}/add`)
        .send(user)
        .set('Accept', 'application/json')
        .end((err, res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    this.refresh()
                }
            }
        })
    }
    updateUser(user){
        request.put(`${UserApiPrefix}/put`)
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
        request.delete(`${UserApiPrefix}/delete/${username}`)
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
            request.get(`${UserApiPrefix}/get/${username}`)
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
