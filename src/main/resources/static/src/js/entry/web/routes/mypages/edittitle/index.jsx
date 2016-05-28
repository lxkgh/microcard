import webAuth from 'web.Auth'
module.exports={
    path:'edittitle',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditTitle.jsx'))
        })
    }
}
