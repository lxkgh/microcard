import React from 'react'

import {UserApiPrefix} from 'admin.Config'

import BaseContent from '../../../component/basecontent/basecontent.jsx'
import BaseTable from '../../../component/basetable/basetable.jsx'

import AddModal from './AddModal.jsx'
import EditModal from './EditModal.jsx'

import Tip from 'Tip'

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
                getPageUrl={`${UserApiPrefix}/page`}
                defaultUrl={`${UserApiPrefix}`}>
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
        this.refs['content'].get(
            `username=${this.refs['baseTable'].getActiveId()}`,
            (data)=>{
                this.refs['editModal'].show(data.data)
            }
        )
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
    refresh=()=>{
        this.hideAddModal()
        this.hideEditModal()
        this.refs['content'].refresh()
    }
    addUser(user){
        this.refs['content'].add(
            user,
            (data)=>{
                Tip.showSuccess(data.desc)
                this.refresh()
            },
            (data)=>{
                Tip.showDanger(data.desc)
            }
        )
    }
    updateUser(user){
        this.refs['content'].edit(
            user,
            (data)=>{
                Tip.showSuccess(data.desc)
                this.refresh()
            },
            (data)=>{
                Tip.showDanger(data.desc)
            }
        )
    }
    delete(){
        this.refs['content'].delete(
            `username=${this.refs['baseTable'].getActiveId()}`,
            (data)=>{
                Tip.showSuccess(data.desc)
                this.refresh()
            },
            (data)=>{
                Tip.showDanger(data.desc)
            }
        )
    }
}

module.exports=Users
