module.exports={
    path:'mypages',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./mypages.jsx'))
        })
    },
    childRoutes: [
        require('./views/index.jsx'),
        require('./EditCard/index.jsx'),
        require('./EditInfo/index.jsx'),
        require('./EditSign/index.jsx'),
        require('./EditSociety/index.jsx'),
        require('./EditPhone/index.jsx'),
        require('./EditPassword/index.jsx'),
        require('./EditTitle/index.jsx'),
        require('./EditBkgImg/index.jsx'),
        require('./ThemeStore/index.jsx'),
        require('./EditThemeItem/index.jsx'),
        require('./EditProduct/index.jsx')
    ]
}
