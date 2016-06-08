import webAuth from 'web.Auth'
module.exports={
    path:'resetpwd',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ResetPw.jsx'))
        })
    }
}
