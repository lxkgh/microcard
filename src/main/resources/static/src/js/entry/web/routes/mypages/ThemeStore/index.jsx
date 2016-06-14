import webAuth from 'web.Auth'
module.exports={
    path:'ThemeStore',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ThemeStore.jsx'))
        })
    }
}
