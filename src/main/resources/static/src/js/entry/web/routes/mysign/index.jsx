module.exports={
    path:'mysign',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MySign.jsx'))
        })
    }
}
