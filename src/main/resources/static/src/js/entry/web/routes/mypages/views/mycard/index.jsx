import webAuth from 'web.Auth'
module.exports={
    path:'mycard',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyCard.jsx'))
        })
    }
}
