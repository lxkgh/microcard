module.exports={
    path:'forgetpwd',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ForgetPwd.jsx'))
        })
    }
}
