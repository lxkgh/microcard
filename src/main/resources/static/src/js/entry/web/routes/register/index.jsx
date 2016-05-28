import webAuth from 'web.Auth'
module.exports={
    path:'register',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./register.jsx'))
        })
    }
}
