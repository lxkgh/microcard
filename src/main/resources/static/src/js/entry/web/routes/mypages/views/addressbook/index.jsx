import webAuth from 'web.Auth'
module.exports={
    path:'addressbook',
    onEnter:webAuth,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./AddressBook.jsx'))
        })
    }
}
