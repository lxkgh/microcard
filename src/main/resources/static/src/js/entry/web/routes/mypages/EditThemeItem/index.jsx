import webAuth from 'web.Auth'
module.exports={
    path:'editthemeitem',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditThemeItem.jsx'))
        })
    }
}
