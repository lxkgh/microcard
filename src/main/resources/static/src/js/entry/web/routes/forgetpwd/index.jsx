import webAuth from 'web.Auth'
module.exports={
    path:'forgetpwd',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ForgetPwd.jsx'))
        })
    }
}
