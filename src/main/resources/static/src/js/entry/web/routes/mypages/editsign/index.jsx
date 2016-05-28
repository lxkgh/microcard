import webAuth from 'web.Auth'
module.exports={
    path:'editsign',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditSign.jsx'))
        })
    }
}
