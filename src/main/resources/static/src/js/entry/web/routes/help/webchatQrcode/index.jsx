import webAuth from 'web.Auth'
module.exports={
    path:'help/webchatQrcode',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./WebchatQrcode.jsx'))
        })
    }
}
