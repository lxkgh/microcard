import webAuth from 'web.Auth'
module.exports={
    path:'editproduct',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EditProduct.jsx'))
        })
    }
}
