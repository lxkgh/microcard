
module.exports={
    path:'resetpwd',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ResetPw.jsx'))
        })
    }
}
