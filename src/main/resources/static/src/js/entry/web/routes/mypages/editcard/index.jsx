module.exports={
    path:'editcard',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditCard.jsx'))
        })
    }
}
