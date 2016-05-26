module.exports={
    path:'mysettitle',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MySetTitle.jsx'))
        })
    }
}
