import React from 'react'

import Request from 'Request'

import Content from 'admin.Content'
import BaseColumn from '../component/basecolumn/basecolum.jsx'
import BaseTable from '../component/basetable/basetable.jsx'

import Cover from 'Cover'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users:[]
        }
        this.buttons=[
            {desc:'新增',onClick:()=>{this.showAddModal()}},
            {desc:'修改'},
            {desc:'刷新'},
            {desc:'删除'}
        ]
        this.userTable={
            header:['用户名','真实姓名','角色'],
            percents:['40%','40%','20%'],
            keys:['username','realname','role'],
            body:this.state.users
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
                    <BaseTable {...this.userTable} />
                </div>
                <Cover ref="cover"/>
            </Content>
        )
    }
    showAddModal(){
        this.refs['cover'].setState({
            show:true
        })
    }
    getUsers(i){
        new Request('/get/userpage/'+i)
        .get()
        .then((data)=>{
            if (data.success) {
                this.setState({
                    users:data.data
                })
                this.userTable.body=data.data
            }
        })
    }
    addUser(user){
        new Request('/add/User')
        .post(user)
        .then((data)=>{
            if (data.success) {
                this.getUsers(0)
            }
        })
    }
}

export default User
