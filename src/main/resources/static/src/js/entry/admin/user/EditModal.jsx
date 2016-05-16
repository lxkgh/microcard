import React,{PropTypes} from 'react'

import Cover from 'Cover'
import Dialog from 'Dialog'
import Button from 'Button'
import Input from 'Input'
import Label from 'Label'
import Col from '../component/col/col.jsx'
import Select from 'Select'

import UserRole from 'UserRole'

class EditModal extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            realname:'',
            role:UserRole[0].key
        }
        this.show=this.show.bind(this)
    }
    render() {
        const {username,realname,role} = this.state
        const {onSubmit} = this.props
        return (
            <Cover ref="cover">
                <Dialog width="40%">
                    <Dialog.Header>
                        <h4>新增用户</h4>
                    </Dialog.Header>
                    <Dialog.Body>
                        <div>
                            <Col col={2}>
                                <Label>用户名</Label>
                            </Col>
                            <Col col={10}>
                                <Input value={username} disabled/>
                            </Col>
                        </div>
                        <div>
                            <Col col={2}>
                                <Label col={2}>真实姓名</Label>
                            </Col>
                            <Col col={10}>
                                <Input value={realname} onChange={(e)=>{this.changeRealname(e)}}/>
                            </Col>
                        </div>
                        <div>
                            <Col col={2}>
                                <Label>角色</Label>
                            </Col>
                            <Col col={10}>
                                <Select value={role} onChange={(e)=>{this.changeRole(e)}}>
                                   {this.renderUserRole()}
                                </Select>
                            </Col>
                        </div>

                    </Dialog.Body>
                    <Dialog.Footer>
                        <Button bstyle="primary"
                            onClick={()=>{this.onSubmit(onSubmit)}}>保存</Button>
                    </Dialog.Footer>
                </Dialog>
            </Cover>
        )
    }
    renderUserRole(){
        const userroleDom=UserRole.map((role,i)=>{
            return <option key={i} value={role.key}>{role.value}</option>
        })
        return userroleDom
    }
    show(user){
        this.refs['cover'].setState({
            show:true
        })
        this.setState({
            username:user.username,
            realname:user.realname,
            role:user.role
        })
    }
    hide(){
        this.refs['cover'].setState({
            show:false
        })
    }
    onSubmit(onSubmit){
        const user={
            username:this.state.username,
            realname:this.state.realname,
            role:this.state.role

        }
        onSubmit(user)
    }
    changeRealname(e){
        this.setState({
            realname:e.target.value
        })
    }
    changeRole(e){
        this.setState({
            role:e.target.value
        })
    }
}

EditModal.propTypes={
    onSubmit:PropTypes.func.isRequired
}

export default EditModal
