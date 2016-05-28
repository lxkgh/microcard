import adminAuth from 'admin.Auth'
module.exports={
    path:'images/background',
    imageUse:'BACKGROUND',
    onEnter:adminAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./images.jsx'))
        })
    }
}
