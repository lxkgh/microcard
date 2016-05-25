module.exports={
    path:'changepassword',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ChangePassword.jsx'))
        })
    }
}
