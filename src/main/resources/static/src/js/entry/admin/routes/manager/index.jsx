module.exports={
    path:'manager',
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('./Manages.jsx'))
        })
    },
    childRoutes:[
        require('./images/bkgindex.jsx'),
        require('./images/iconindex.jsx'),
        require('./users/index.jsx')
    ]
}
