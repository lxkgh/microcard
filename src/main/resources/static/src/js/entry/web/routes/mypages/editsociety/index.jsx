module.exports={
    path:'editsociety',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditSociety.jsx'))
        })
    }
}
