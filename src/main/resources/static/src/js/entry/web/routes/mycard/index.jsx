module.exports={
    path:'mycard',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyIndex.jsx'))
        })
    }
}
