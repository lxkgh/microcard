module.exports={
    path:'mysociety',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MySociety.jsx'))
        })
    }
}
