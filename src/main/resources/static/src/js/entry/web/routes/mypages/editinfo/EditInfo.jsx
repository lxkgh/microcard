import React from 'react'

import styles from './EditInfo.css'
import cx from 'classnames'
import InputItem from 'webfront.InputItem'
import Button from 'webfront.Button'

class EditInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            realname:'',
            company:'',
            job:'',
            department:'',
            cellphone:'',
            phone:'',
            tax:'',
            address:'',
            email:''
        }
    }
    changeRealname(e){
        this.setState({
            realname:e.target.value
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
    changeCellphone(e){
        this.setState({
            cellphone:e.target.value
        })
    }
    changePhone(e){
        this.setState({
            phone:e.target.value
        })
    }
    changeTax(e){
        this.setState({
            tax:e.target.value
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
    render(){
        const {realname,company,job,department,cellphone,
            phone,tax,address,email} = this.state
        const input1props = {
            tagName:'姓名',
            type:'text',
            defaultInfo:'请输入姓名',
            value:realname
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
            value:cellphone
        }
        const input6props = {
            tagName:'座机',
            type:'text',
            defaultInfo:'请输入座机号码',
            value:phone
        }
        const input7props = {
            tagName:'传真',
            type:'text',
            defaultInfo:'请输入传真号码',
            value:tax
        }
        const input8props = {
            tagName:'地址',
            type:'text',
            defaultInfo:'请输入您的地址',
            value:address
        }
        const input9props = {
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
                            <InputItem {...input1props}
                                onChange={(e)=>{this.changeRealname(e)}}/>
                            <InputItem {...input2props}
                                onChange={(e)=>{this.changeCompany(e)}}/>
                            <InputItem {...input3props}
                                onChange={(e)=>{this.changeJob(e)}}/>
                            <InputItem {...input4props}
                                onChange={(e)=>{this.changeDepartment(e)}}/>
                            <InputItem {...input5props}
                                onChange={(e)=>{this.changeCellphone(e)}}/>
                            <InputItem {...input6props}
                                onChange={(e)=>{this.changePhone(e)}}/>
                            <InputItem {...input7props}
                                onChange={(e)=>{this.changeTax(e)}}/>
                            <InputItem {...input8props}
                                onChange={(e)=>{this.changeAddress(e)}}/>
                            <InputItem {...input9props}
                                onChange={(e)=>{this.changeEmail(e)}}/>
                        </ul>
                        <Button>保存</Button>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports=EditInfo
