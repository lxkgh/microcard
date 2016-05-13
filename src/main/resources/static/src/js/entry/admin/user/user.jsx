import React from 'react'
import request from 'superagent'

import Content from 'admin.Content'
import BaseColumn from '../component/basecolumn/basecolum.jsx'
import BaseTable from '../component/basetable/basetable.jsx'

import AddModal from './AddModal.jsx'

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
                <AddModal ref="addModal" onSubmit={(user)=>{this.addUser(user)}}/>
            </Content>
        )
    }
    showAddModal(){
        this.refs['addModal'].show()
    }
    hideAddModal(){
        this.refs['addModal'].hide()
    }
    getUsers(i){
        request.get('/get/userpage/'+i)
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
    addUser(user){
        request.post('/add/user')
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
        });
    }
}

export default User
