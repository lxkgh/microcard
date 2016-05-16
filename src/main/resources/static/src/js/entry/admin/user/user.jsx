import React from 'react'
import request from 'superagent'

import {ApiPrefix} from '../config.jsx'

import Content from 'admin.Content'
import BaseColumn from '../component/basecolumn/basecolum.jsx'
import BaseTable from '../component/basetable/basetable.jsx'

import AddModal from './AddModal.jsx'
import EditModal from './EditModal.jsx'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users:[],
            page:0
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
        this.getUsers(0)
    }
    render() {
        return (
            <Content className="flex">
                <BaseColumn buttons={this.buttons}/>
                <div style={{width:'100%',marginTop:'30px'}}>
                    <BaseTable ref="baseTable" {...this.userTable} />
                </div>
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
    getUsers(i){
        request.get(`${ApiPrefix}/get/userpage/${i}`)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success) {
                    this.userTable.body=data.data
                    this.setState({
                        users:data.data
                    })
                }
            }
        })
    }
    refresh(){
        this.hideAddModal()
        this.hideEditModal()
        const {page} = this.state
        this.getUsers(page)
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
                    this.getUsers(0)
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

export default User
