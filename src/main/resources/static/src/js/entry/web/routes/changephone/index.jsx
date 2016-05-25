module.exports={
    path:'changephone',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ChangePhone.jsx'))
        })
    }
}
