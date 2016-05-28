import adminAuth from 'admin.Auth'
module.exports={
    path:'images/icon',
    imageUse:'ICON',
    onEnter:adminAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./images.jsx'))
        })
    }
}
