module.exports={
    path:'editpassword',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditPassword.jsx'))
        })
    }
}
