import adminAuth from 'admin.Auth'
module.exports={
    path: 'users',
    onEnter:adminAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./users.jsx'))
        })
    }
}
