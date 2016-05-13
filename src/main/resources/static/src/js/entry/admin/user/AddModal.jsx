import React,{PropTypes} from 'react'

import Cover from 'Cover'
import Dialog from 'Dialog'
import Button from 'Button'
import Input from 'Input'
import Label from 'Label'
import Col from '../component/col/col.jsx'
import WarnMsg from '../component/warnmsg/warnmsg.jsx'
import Select from 'Select'

import UserRole from 'UserRole'

class AddModal extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            realname:'',
            password:'',
            role:UserRole[0].key
        }
    }
    render() {
        const {onSubmit} = this.props
        const {username,realname,password,role} = this.state
        return (
            <Cover ref="cover">
                <Dialog width="40%">
                    <Dialog.Header>
                        <h4>新增用户</h4>
                    </Dialog.Header>
                    <Dialog.Body>
                        <WarnMsg msg="123" style={{marginLeft:Col.md2,width:Col.md10}} />
                        <div>
                            <Col col={2}>
                                <Label>用户名</Label>
                            </Col>
                            <Col col={10}>
                                <Input value={username} onChange={(e)=>{this.changeUsername(e)}} />
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
                                <Label col={2}>密码</Label>
                            </Col>
                            <Col col={10}>
                                <Input value={password} onChange={(e)=>{this.changePassword(e)}}/>
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
    show(){
        this.refs['cover'].setState({
            show:true
        })
    }
    hide(){
        this.refs['cover'].setState({
            show:false
        })
    }
    onSubmit(onSubmit){
        const user={
            password:this.state.password,
            realname:this.state.realname,
            role:this.state.role,
            username:this.state.username
        }
        onSubmit(user)
    }
    changeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    changeRealname(e){
        this.setState({
            realname:e.target.value
        })
    }
    changePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    changeRole(e){
        this.setState({
            role:e.target.value
        })
    }
}
AddModal.propTypes={
    onSubmit:PropTypes.func.isRequired
}
export default AddModal
