module.exports={
    path:'images/icon',
    imageUse:'ICON',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./images.jsx'))
        })
    }
}
