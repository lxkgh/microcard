module.exports={
    path:'myinfo',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyInfo.jsx'))
        })
    }
}
