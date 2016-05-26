module.exports={
    path:'edittitle',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditTitle.jsx'))
        })
    }
}
