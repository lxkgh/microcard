import webAuth from 'web.Auth'
module.exports={
    path:'home',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Home.jsx'))
        })
    }
}
