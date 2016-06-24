import webAuth from 'web.Auth'
module.exports={
    path:'help/useMicrocard',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./UseMicrocard.jsx'))
        })
    }
}
