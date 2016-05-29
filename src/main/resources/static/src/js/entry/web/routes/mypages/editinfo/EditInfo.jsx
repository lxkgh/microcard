import React from 'react'

import styles from './EditInfo.css'
import cx from 'classnames'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'
import IdcardItem from 'webfront.IdcardItem'
import request from 'superagent'
import Auth from 'Auth'
import {Prefixs} from 'web.Config'
import messenger from 'web.Messenger'
class EditInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            company:'',
            job:'',
            department:'',
            phone:'',
            address:'',
            email:''
        }
    }
    changeName(e){
        this.setState({
            name:e.target.value
        })
    }
    changeCompany(e){
        this.setState({
            company:e.target.value
        })
    }
    changeJob(e){
        this.setState({
            job:e.target.value
        })
    }
    changeDepartment(e){
        this.setState({
            department:e.target.value
        })
    }
    changePhone(e){
        this.setState({
            phone:e.target.value
        })
    }
    changeAddress(e){
        this.setState({
            address:e.target.value
        })
    }
    changeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    componentDidMount() {
        this.getUserCard()
    }
    render(){
        const {name,company,job,department,phone,address,email} = this.state
        const input1props = {
            tagName:'姓名',
            type:'text',
            defaultInfo:'请输入姓名',
            value:name
        }
        const input2props = {
            tagName:'公司',
            type:'text',
            defaultInfo:'请输入您的公司',
            value:company
        }
        const input3props = {
            tagName:'职位',
            type:'text',
            defaultInfo:'请输入您的职位',
            value:job
        }
        const input4props = {
            tagName:'部门',
            type:'text',
            defaultInfo:'请输入您所在部门',
            value:department
        }
        const input5props = {
            tagName:'手机',
            type:'text',
            defaultInfo:'请输入手机号码',
            value:phone
        }
        const input6props = {
            tagName:'地址',
            type:'text',
            defaultInfo:'请输入您的地址',
            value:address
        }
        const input7props = {
            tagName:'邮箱',
            type:'text',
            defaultInfo:'请输入您的邮箱',
            value:email
        }
        return(
            <div className= {styles.wrapDivStyle}>
                <div className= {styles.myInfoMenu}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>基本信息</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <IdcardItem />
                            <InputItem {...input1props}
                                onChange={(e)=>{this.changeName(e)}}/>
                            <InputItem {...input2props}
                                onChange={(e)=>{this.changeCompany(e)}}/>
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeJob(e)}}/>
                            <InputItem {...input4props}
                                onChange={(e)=>{this.changeDepartment(e)}}/>
                            <InputItem {...input5props}
                                onChange={(e)=>{this.changePhone(e)}}/>
                            <InputItem {...input6props}
                                onChange={(e)=>{this.changeAddress(e)}}/>
                            <InputItem {...input7props}
                                onChange={(e)=>{this.changeEmail(e)}}/>
                        </ul>
                        <Button onClick={this.handleSubmit}>保存</Button>
                    </section>
                </div>
            </div>
        )
    }
    getUserCard=()=>{
        request.get(`${Prefixs.usercard}?userId=${Auth.getUserId()}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            if (data.success) {
                this.setState({
                    name:data.data.name,
                    company:data.data.company,
                    job:data.data.job,
                    department:data.data.department,
                    phone:data.data.phone,
                    address:data.data.address,
                    email:data.data.email
                })
            }else {
                messenger.showMsg({
                    msg:'获取名片信息失败！'
                })
            }
        })
    }
    handleSubmit=()=>{
        request.put(`${Prefixs.usercard}/baseinfo`)
        .send(this.state)
        .end((err,res)=>{
            if (err) {
                messenger.showMsg({
                    msg:err.message
                })
                return
            }
            const data = JSON.parse(res.text)
            messenger.showMsg({
                msg:data.desc
            })
            this.getUserCard()
        })
    }
}

module.exports=EditInfo
