import React,{PropTypes} from 'react'

import Topbar from 'topbar'

const TopbarTitle={
    ['/mypages/homepage']:'名片主页',
    ['/mypages/editcard']:'编辑名片',
    ['/mypages/mycard']:'我的名片',
    ['/mypages/editphone']:'修改绑定手机',
    ['/mypages/editpassword']:'修改登录密码',
    ['/mypages/editinfo']:'修改个人基本信息',
    ['/mypages/editsociety']:'修改个人社交信息',
    ['/mypages/editsign']:'修改个人签名'
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
