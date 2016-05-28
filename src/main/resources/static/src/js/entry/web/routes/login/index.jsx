import webAuth from 'web.Auth'
module.exports={
    path:'login',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./login.jsx'))
        })
    }
}
