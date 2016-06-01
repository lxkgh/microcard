module.exports={
    path:'showcard/:userId',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ShowCard.jsx'))
        })
    }
}
