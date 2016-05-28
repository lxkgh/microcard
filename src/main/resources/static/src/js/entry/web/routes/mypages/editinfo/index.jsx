import webAuth from 'web.Auth'
module.exports={
    path:'editinfo',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditInfo.jsx'))
        })
    }
}
