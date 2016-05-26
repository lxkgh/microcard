module.exports={
    path:'editsign',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditSign.jsx'))
        })
    }
}
