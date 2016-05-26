module.exports={
    path:'editphone',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditPhone.jsx'))
        })
    }
}
