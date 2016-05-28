import webAuth from 'web.Auth'
module.exports={
    path:'editpassword',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditPassword.jsx'))
        })
    }
}
