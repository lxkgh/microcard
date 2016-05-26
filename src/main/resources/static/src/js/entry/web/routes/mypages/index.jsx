module.exports={
    path:'mypages',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./mypages.jsx'))
        })
    },
    childRoutes: [
        require('./homepage/index.jsx'),
        require('./editcard/index.jsx'),
        require('./mycard/index.jsx'),
        require('./editinfo/index.jsx'),
        require('./editsign/index.jsx'),
        require('./editsociety/index.jsx'),
        require('./editphone/index.jsx'),
        require('./editpassword/index.jsx')
    ]
}
