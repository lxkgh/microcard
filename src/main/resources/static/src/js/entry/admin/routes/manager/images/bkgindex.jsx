module.exports={
    path:'images/background',
    imageUse:'BACKGROUND',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./images.jsx'))
        })
    }
}
