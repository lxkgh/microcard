import webAuth from 'web.Auth'
module.exports={
    path:'editcard',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditCard.jsx'))
        })
    }
}
