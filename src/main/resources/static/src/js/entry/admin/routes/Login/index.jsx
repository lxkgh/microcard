import adminAuth from 'admin.Auth'
module.exports = {
    path:'/login',
    onEnter:adminAuth,
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('./Login.jsx'))
        })
    }
}
