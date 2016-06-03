import webAuth from 'web.Auth'
module.exports={
    path:'editbkgimg',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditBkgImg.jsx'))
        })
    }
}
