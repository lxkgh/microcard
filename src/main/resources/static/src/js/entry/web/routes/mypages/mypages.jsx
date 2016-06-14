import React,{PropTypes} from 'react'

import Topbar from 'topbar'

import ROUTES from 'web.Config'

const TopbarTitle={
    [ROUTES.home]:'名片主页',
    [ROUTES.mycard]:'账号管理',
    [ROUTES.editcard]:'编辑名片',
    [ROUTES.editinfo]:'修改个人基本信息',
    [ROUTES.editsign]:'修改个人签名',
    [ROUTES.editsociety]:'修改个人社交信息',
    [ROUTES.editphone]:'修改绑定手机',
    [ROUTES.editpassword]:'修改登录密码',
    [ROUTES.edittitle]:'修改名片标题',
    [ROUTES.editbkgimg]:'主题背景',
    [ROUTES.addressbook]:'通讯录',
    [ROUTES.themestore]:'主题库',
    [ROUTES.editthemeitem]:'编辑主题栏目'
}

class MyPages extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const topbarProps = {desc:'名片主页'}
        if (TopbarTitle[this.props.location.pathname]) {
            topbarProps.desc=TopbarTitle[this.props.location.pathname]
        }
        return (
            <div style={{width:'100%',height:'100%'}}>
                <Topbar {...topbarProps}/>
                {this.props.children}
            </div>
        )
    }
}
MyPages.propTypes={
    location:PropTypes.object
}
module.exports=MyPages
