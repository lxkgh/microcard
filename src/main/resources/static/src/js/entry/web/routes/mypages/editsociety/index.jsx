import webAuth from 'web.Auth'
module.exports={
    path:'editsociety',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditSociety.jsx'))
        })
    }
}
