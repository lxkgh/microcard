import webAuth from 'web.Auth'
module.exports={
    path:'editphone',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditPhone.jsx'))
        })
    }
}
