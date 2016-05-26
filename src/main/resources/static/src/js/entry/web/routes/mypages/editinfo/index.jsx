module.exports={
    path:'editinfo',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditInfo.jsx'))
        })
    }
}
