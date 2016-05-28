import ROUTES from 'web.Config'
module.exports={
    path:'views',
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('./Views.jsx'))
        })
    },
    indexRoute: { onEnter: (nextState, replace) => replace(ROUTES.home) },
    childRoutes:[
        require('./Home/index.jsx'),
        require('./MyCard/index.jsx')
    ]
}
